export type OpenCvPlaygroundTool<T extends string> = {
  name: string;
  key: string;
  type: T;
};

export type OpenCvPlaygroundRangeTool = {
  max: number;
  min: number;
  initialValue: number;
} & OpenCvPlaygroundTool<"range">;

export type OpenCvPlaygroundSelectTool = {
  options: { name: string; value: string }[];
  initialValue: string;
} & OpenCvPlaygroundTool<"select">;

export type OpenCvPlaygroundButtonTool = {
  onClick: () => void;
} & OpenCvPlaygroundTool<"button">;

export type OpenCvPlaygroundToggleTool = {
  initialValue: boolean;
} & OpenCvPlaygroundTool<"toggle">;

export type OpenCvPlaygroundTools =
  | OpenCvPlaygroundRangeTool
  | OpenCvPlaygroundSelectTool
  | OpenCvPlaygroundButtonTool
  | OpenCvPlaygroundToggleTool;

export type OpenCvPlaygroundProps = {
  tools: OpenCvPlaygroundTools[];
  createImage: (payload: { url: string } & Record<string, unknown>) => Promise<{ width: number; height: number; image: React.ReactNode }>
};
