import styled from 'styled-components';
import { Layout } from "antd";

export const OpenCVPlaygroundWrapper = styled(Layout)`
    height: 100%;
`;

export const OpenCVPlaygroundContent = styled(Layout.Content)`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`;

export const OpenCVPlaygroundUpload = styled.div`
    padding: 32px;
`;