import { useCallback, useEffect, useRef, useState } from "react";
import calculateAspectRatioFit from "../../utils/calculateAspectRatioFit";

function useZoomAndPan() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState({
    x: 0,
    y: 0,
    scale: 1,
    width: 0,
    height: 0,
    scaleFactor: 1.25,
    mouse: {
      x: 0,
      y: 0,
      dragging: false,
    },
  });

  const fitToContainer = (
    containerWidth: number,
    containerHeight: number,
    alignCenter: boolean = true,
    referenceWidth?: number,
    referenceHeight?: number
  ) => {
    if (ref.current) {
      const refWidth =
        referenceWidth !== undefined ? referenceWidth : ref.current.clientWidth;
      const refHeight =
        referenceHeight !== undefined
          ? referenceHeight
          : ref.current.clientHeight;

      const { width, height } = calculateAspectRatioFit(
        refWidth,
        refHeight,
        containerWidth,
        containerHeight
      );

      const scale = width / refWidth;
      const newScale = scale > 1 ? 1 : scale;
      const newWidth = scale > 1 ? refWidth : width;
      const newHeight = scale > 1 ? refHeight : height;
      const newX = alignCenter ? (containerWidth - newWidth) / 2 : 0;
      const newY = alignCenter ? (containerHeight - newHeight) / 2 : 0;

      setState({
        ...state,
        scale: newScale,
        width: newWidth,
        height: newHeight,
        x: newX,
        y: newY,
      });
    }
  };

  const pan = useCallback(
    (e: MouseEvent) => {
      const { mouse, x, y } = state;
      const offsetX = e.clientX - mouse.x + x;
      const offsetY = e.clientY - mouse.y + y;

      e.preventDefault();

      setState({
        ...state,
        mouse: {
          dragging: true,
          x: e.clientX,
          y: e.clientY,
        },
        x: offsetX,
        y: offsetY,
      });
    },
    [state]
  );

  const zoom = useCallback(
    (zoomIn: boolean, reset: boolean = false) => {
      const { scale, scaleFactor } = state;

      let newScale = scale;

      if (reset) {
        newScale = 1;
      } else {
        if (zoomIn) {
          newScale *= scaleFactor;
        } else if (newScale > 0.1) {
          newScale /= scaleFactor;
        }
      }

      setState({
        ...state,
        scale: newScale,
      });
    },
    [state]
  );

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      setState({
        ...state,
        mouse: {
          x: e.clientX,
          y: e.clientY,
          dragging: true,
        },
      });
    },
    [state]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const mouseIsMoving = state.mouse.dragging;
        const wasLeftClick = e.buttons === 1;
        if (mouseIsMoving && wasLeftClick) {
          pan(e);
        }
      });
    },
    [pan, state.mouse.dragging]
  );

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      setState({
        ...state,
        mouse: {
          x: 0,
          y: 0,
          dragging: false,
        },
      });
    },
    [state]
  );

  const onMouseWheel = useCallback(
    (e: WheelEvent) => {
      requestAnimationFrame(() => {
        if (ref.current && ref.current.parentElement) {
          const { scale, x, y, scaleFactor } = state;

          const mouseX = e.pageX - ref.current.parentElement.offsetLeft;
          const mouseY = e.pageY - ref.current.parentElement.offsetTop;

          const mousePointTo = {
            x: mouseX / scale - x / scale,
            y: mouseY / scale - y / scale,
          };

          const newScale =
            e.deltaY > 0 ? scale * scaleFactor : scale / scaleFactor;

          const newPosition = {
            x: -(mousePointTo.x - mouseX / newScale) * newScale,
            y: -(mousePointTo.y - mouseY / newScale) * newScale,
          };

          setState({
            ...state,
            x: newPosition.x,
            y: newPosition.y,
            scale: newScale,
          });
        }
      });
    },
    [state]
  );

  const addEventListeners = useCallback(() => {
    if (ref.current) {
      ref.current.addEventListener("wheel", onMouseWheel);
      ref.current.addEventListener("mousedown", onMouseDown);
      ref.current.addEventListener("mousemove", onMouseMove);
      ref.current.addEventListener("mouseup", onMouseUp);
    }
  }, [onMouseDown, onMouseMove, onMouseUp, onMouseWheel]);

  const removeEventListeners = useCallback(() => {
    if (ref.current) {
      ref.current.removeEventListener("wheel", onMouseWheel);
      ref.current.removeEventListener("mousedown", onMouseDown);
      ref.current.removeEventListener("mousemove", onMouseMove);
      ref.current.removeEventListener("mouseup", onMouseUp);
    }
  }, [onMouseDown, onMouseMove, onMouseUp, onMouseWheel]);

  const setZoomRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (el) {
        ref.current = el;
        addEventListeners();
      }
    },
    [addEventListeners]
  );

  useEffect(() => {
    return function cleanup() {
      removeEventListeners();
    };
  }, [removeEventListeners]);

  return { setZoomRef, zoom, pan, fitToContainer, ...state };
}

export default useZoomAndPan;
