import React, { FunctionComponent, useCallback, useState } from "react";
import { Group, Layer, Stage, Rect } from "react-konva";
import useOnPropUpdated from "../../hooks/useOnPropUpdated";
import useZoomAndPan from "../../hooks/useZoomAndPan";
import { useImageProvider } from "../../providers/ImageProvider";
import { CanvasContainer } from "./Canvas.styled";

type CanvasProps = {
  width: number;
  height: number;
};

const Canvas: FunctionComponent<CanvasProps> = ({
  children,
  width,
  height,
}) => {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const { setStageRef, image } = useImageProvider();
  const { scale, x, y, setZoomRef, fitToContainer } = useZoomAndPan();

  const handleRef = useCallback(
    (el: HTMLDivElement | null) => {
      if (el) {
        setContainerWidth(el.clientWidth);
        setContainerHeight(el.clientHeight);
        setZoomRef(el);
      }
    },
    [setZoomRef]
  );

  useOnPropUpdated(image, (_, currentImage) => {
    if (currentImage) {
        fitToContainer(
            containerWidth,
            containerHeight,
            true,
            currentImage.naturalWidth,
            currentImage.naturalHeight,
        );
    }
  });

  return (
    <CanvasContainer ref={handleRef}>
      <Stage height={containerHeight} width={containerWidth} ref={setStageRef}>
        <Layer>
          <Group
            height={height * scale}
            width={width * scale}
            scale={{ x: scale, y: scale }}
            x={x}
            y={y}
          >
            <Rect
              x={0}
              y={0}
              width={width}
              height={height}
              fillLinearGradientStartPoint={{ x: 0, y: height / 2 }}
              fillLinearGradientEndPoint={{ x: width, y: height / 2 }}
              fillLinearGradientColorStops={[0, "#1D2951", 1, "#000000"]}
            />
            {children}
          </Group>
        </Layer>
      </Stage>
    </CanvasContainer>
  );
};

export default Canvas;
