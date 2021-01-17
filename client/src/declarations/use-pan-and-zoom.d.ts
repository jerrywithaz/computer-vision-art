declare module "use-pan-and-zoom" {
  type Position = { x: number; y: number };

  type ZoomFunction = (zoom: number) => number;

  type PositionFunction = (position: Position) => Position;

  type UseZoomAndPanArgs = {
    container: React.RefObject<HTMLElement>;
    enablePan?: boolean;
    enableZoom?: boolean;
    requirePinch?: boolean;
    preventClickOnPan?: boolean;
    zoomSensitivity?: number; // 0 < zoomSensitivity < 1
    minZoom?: number;
    maxZoom?: number;
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
    initialZoom?: number;
    initialPan?: {
      x: number;
      y: number;
    };
    onPanStart?: (event: React.SyntheticEvent) => void;
    onPan?: (event: React.SyntheticEvent) => void;
    onPanEnd?: (event: React.SyntheticEvent) => void;
    onZoom?: (event: React.SyntheticEvent) => void;
    requireCtrlToZoom: boolean;
    scrollPanSensitivity?: number;
  };

  type UseZoomAndPanReturn = {
    transform: string;
    pan: Position;
    zoom: number;
    setPan: (position: Position | PositionFunction) => void;
    setZoom: (zoom: number | ZoomFunction, center: Position) => void;
    panZoomHandlers: {
      onTouchStart: (event: React.SyntheticEvent) => void;
      onTouchMove: (event: React.SyntheticEvent) => void;
      onTouchEnd: (event: React.SyntheticEvent) => void;
      onTouchCancel: (event: React.SyntheticEvent) => void;
      onMouseDown: (event: React.SyntheticEvent) => void;
      onMouseMove: (event: React.SyntheticEvent) => void;
      onMouseUp: (event: React.SyntheticEvent) => void;
      onClickCapture: (event: React.SyntheticEvent) => void;
      onMouseOut: (event: React.SyntheticEvent) => void;
      onWheel: (event: React.SyntheticEvent) => void;
    };
    setContainer: (element: any) => void;
  };

  function useZoomAndPan(UseZoomAndPanArgs): UseZoomAndPanReturn;

  export default useZoomAndPan;
}
