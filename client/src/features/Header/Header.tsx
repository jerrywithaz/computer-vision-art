import React from "react";
import { Button, Space } from "antd";
import { useImageProvider } from "../../providers/ImageProvider";
import { HeaderContainer, HeaderLogo } from "./Header.styled";

const Header = () => {
  const { downloadImage, removeImage, uri } = useImageProvider();

  return (
    <HeaderContainer>
      <HeaderLogo level={1}>JerryWithaZ</HeaderLogo>
      <Space size={[8, 0]}>
        {uri && (
          <Button type="default" onClick={removeImage}>
            Remove Image
          </Button>
        )}
        <Button type="primary" onClick={downloadImage}>
          Download Image
        </Button>
      </Space>
    </HeaderContainer>
  );
};

export default Header;
