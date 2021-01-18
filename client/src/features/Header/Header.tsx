import React from "react";
import { Button, Space } from "antd";
import { DownloadOutlined, CloseOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useImageProvider } from "../../providers/ImageProvider";
import { HeaderContainer, HeaderLogo, HeaderRow } from "./Header.styled";

const Header = () => {
  const screens = useBreakpoint();
  const isSmallScreen =
    Object.entries(screens).filter(
      (screen) => screen[1] === true && screen[0] === "xs"
    ).length === 1;
  const { downloadImage, removeImage, uri } = useImageProvider();

  return (
    <HeaderContainer>
      <HeaderRow align="middle" justify="space-between">
        <HeaderLogo level={1}>JerryWithaZ</HeaderLogo>
        <Space size={[8, 0]}>
          {uri && (
            <Button
              type="default"
              onClick={removeImage}
              icon={
                isSmallScreen ? <CloseOutlined color="#ffffff" /> : undefined
              }
            >
              {isSmallScreen ? null : "Remove Image"}
            </Button>
          )}
          <Button
            type="primary"
            onClick={downloadImage}
            icon={
              isSmallScreen ? <DownloadOutlined color="#ffffff" /> : undefined
            }
          >
            {isSmallScreen ? null : "Download Image"}
          </Button>
        </Space>
      </HeaderRow>
    </HeaderContainer>
  );
};

export default Header;
