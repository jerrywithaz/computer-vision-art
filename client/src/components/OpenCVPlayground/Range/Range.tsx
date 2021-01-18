import React, { useState } from "react";
import debounce from 'lodash/debounce';
import { Slider, Form } from "antd";
import { OpenCvPlaygroundRangeTool } from "../OpenCVPlayground.types";

type RangeProps = Pick<
  OpenCvPlaygroundRangeTool,
  "initialValue" | "name" | "min" | "max"
> & {
  value: number;
  onChange: (value: number) => void;
};

const Range = ({
  name,
  initialValue,
  onChange,
  min,
  max,
}: RangeProps) => {
  const [internalValue, setInternalValue] = useState<number>(initialValue);
  return (
    <Form.Item label={`${name} (${internalValue}/${max})`} labelCol={{ span: 24 }}>
      <Slider
        defaultValue={initialValue}
        value={internalValue}
        onChange={setInternalValue}
        onAfterChange={debounce(onChange, 500)}
        min={min}
        max={max}
      />
    </Form.Item>
  );
};

export default Range;
