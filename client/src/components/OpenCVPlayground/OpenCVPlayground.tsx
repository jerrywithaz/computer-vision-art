import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Upload, message, Button } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadOutlined } from "@ant-design/icons";
import { useImageProvider } from "../../providers/ImageProvider";
import Canvas from "../Canvas";
import {
  OpenCVPlaygroundContent,
  OpenCVPlaygroundUpload,
  OpenCVPlaygroundWrapper,
} from "./OpenCVPlayground.styled";
import { OpenCvPlaygroundProps } from "./OpenCVPlayground.types";
import Sidebar from "./Sidebar";
import Spinner from "./Spinner";

function getBase64(
  img: File,
  callback: (result: string | ArrayBuffer | null) => void
) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const OpenCVPlayground: FunctionComponent<OpenCvPlaygroundProps> = ({
  tools,
  createImage,
}) => {
  const { setURI, setDimensions, width, height, uri } = useImageProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const [toolState, setToolState] = useState<Record<string, unknown>>({});
  const [components, setComponents] = useState<React.ReactNode>(null);

  const handleToolChange = useCallback(
    (key: string, value: any) => {
      setToolState({
        ...toolState,
        [key]: value,
      });
    },
    [toolState]
  );

  const updateImage = useCallback(
    (url: string) => {
      setLoading(true);
      createImage({
        ...toolState,
        url,
      })
        .then(({ width, height, image }) => {
          setDimensions({ width, height });
          setComponents(image);
          setLoading(false);
        })
        .catch(() => {
          message.error("There was an error creating your image");
          setLoading(false);
        });
    },
    [createImage, setDimensions, toolState]
  );

  const handleUpload = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.originFileObj instanceof File) {
      getBase64(info.file.originFileObj, (url) => {
        if (typeof url === "string") {
          setURI(url);
        } else {
          message.error("You can only upload images.");
        }
      });
    } else {
      message.error("You can only upload images.");
    }
  };

  useEffect(() => {
    if (uri) updateImage(uri);
  }, [uri, toolState, updateImage]);

  return (
    <OpenCVPlaygroundWrapper>
      <Sidebar
        tools={tools}
        onToolChange={handleToolChange}
        values={toolState}
      />
      <OpenCVPlaygroundContent>
        {!uri ? (
          <OpenCVPlaygroundUpload>
            <Upload accept="image/*" onChange={handleUpload}>
              <Button icon={<UploadOutlined />}>
                Click to Upload an Image
              </Button>
            </Upload>
          </OpenCVPlaygroundUpload>
        ) : (
          <Canvas width={width} height={height}>
            {components}
          </Canvas>
        )}
        {loading && <Spinner />}
      </OpenCVPlaygroundContent>
    </OpenCVPlaygroundWrapper>
  );
};

export default OpenCVPlayground;
