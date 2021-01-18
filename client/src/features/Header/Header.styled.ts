import { Layout, Typography } from "antd";
import styled from 'styled-components';

const { Header } = Layout;

export const HeaderContainer = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogo = styled(Typography.Title)`
    && {
        color: #ffffff;
        margin: 0px;
        font-size: 24px;
    }
`;