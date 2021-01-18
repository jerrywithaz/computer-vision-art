import React from "react";
import { Spin, Typography } from "antd";
import { SpinnerContainer } from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Spin size="large" />
      <Typography.Text>
          Generating your image..
      </Typography.Text>
    </SpinnerContainer>
  );
};

export default Spinner;
