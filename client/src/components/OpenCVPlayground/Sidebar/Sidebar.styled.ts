import styled from 'styled-components';
import { Layout } from "antd";

const { Sider } = Layout;

export const SidebarContainer = styled(Sider)`
    padding: 32px 32px;
    &.ant-layout-sider-collapsed {
        padding: 0px;
    }
    .ant-layout-sider-zero-width-trigger {
        top: 0px;
    }
`;