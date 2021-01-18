import React from "react";
import { Spin } from "antd";
import { SpinnerContainer } from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Spin size="large" />
    </SpinnerContainer>
  );
};

export default Spinner;
