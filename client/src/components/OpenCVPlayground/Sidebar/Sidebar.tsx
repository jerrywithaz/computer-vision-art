import React, { FunctionComponent } from "react";
import { SidebarContainer } from "./Sidebar.styled";
import { OpenCvPlaygroundTools } from "../OpenCVPlayground.types";
import Toggle from "../Toggle";
import Range from "../Range";

type SideBarProps = {
  onToolChange: (key: string, value: any) => void;
  tools: OpenCvPlaygroundTools[];
  values: Record<string, any>;
};

const Sidebar: FunctionComponent<SideBarProps> = ({
  tools,
  onToolChange,
  values,
}) => {
  return (
    <SidebarContainer
      width={300}
      theme="light"
      breakpoint="md"
      collapsedWidth="0"
    >
      {tools.map((tool) => {
        if (tool.type === "toggle") {
          return (
            <Toggle
              key={tool.key}
              initialValue={tool.initialValue}
              onChange={(value) => onToolChange(tool.key, value)}
              value={values[tool.key]}
              name={tool.name}
            />
          );
        }
        if (tool.type === "range") {
          return (
            <Range
              key={tool.key}
              initialValue={tool.initialValue}
              onChange={(value) => onToolChange(tool.key, value)}
              value={values[tool.key]}
              name={tool.name}
              max={tool.max}
              min={tool.min}
            />
          );
        }
        return null;
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
