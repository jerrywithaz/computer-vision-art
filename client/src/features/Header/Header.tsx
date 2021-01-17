import React from "react";
import { Button } from "antd";
import { useImageProvider } from "../../providers/ImageProvider";
import { HeaderContainer, HeaderLogo } from "./Header.styled";

const Header = () => {
  const { downloadImage } = useImageProvider();

  return (
    <HeaderContainer>
      <HeaderLogo level={1}>JerryWithaZ</HeaderLogo>
      <Button type="primary" onClick={downloadImage}>
        Download Image
      </Button>
    </HeaderContainer>
  );
};

export default Header;
