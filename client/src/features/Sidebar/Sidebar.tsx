import React from "react";
import { Menu } from "antd";
import { SidebarContainer } from "./Sidebar.styled";

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <SidebarContainer width={200} theme="light">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ borderRight: 0 }}
      >
        <SubMenu key="sub1" title="My Images">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
