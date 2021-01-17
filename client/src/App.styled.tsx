import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const AppContainer = styled(Layout)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const AppContent = styled(Content)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;