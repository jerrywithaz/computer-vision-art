import React from "react";
import { Switch, Form } from "antd";
import { OpenCvPlaygroundToggleTool } from "../OpenCVPlayground.types";
import { ToggleContainer } from "./Toggle.styled";

type ToggleProps = Pick<OpenCvPlaygroundToggleTool, "initialValue" | "name"> & {
  value: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle = ({ initialValue, value, onChange, name }: ToggleProps) => {
  return (
    <ToggleContainer as={Form.Item} label={name}>
      <Switch
        defaultChecked={initialValue}
        checked={value}
        onChange={onChange}
      />
    </ToggleContainer>
  );
};

export default Toggle;
