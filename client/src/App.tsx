import React, { useState } from "react";
import { Line } from "react-konva";
import { Layout } from "antd";
import { AppContainer, AppContent } from "./App.styled";
import Canvas from "./components/Canvas";
import GlobalStyles from "./components/GlobalStyles";
import useCannyEdges from "./hooks/useCannyEdges";
import { useImageProvider } from "./providers/ImageProvider";
import randomInteger from "./utils/randomInteger";
import Sidebar from "./features/Sidebar";
import Header from "./features/Header";

function App() {
  const getCannyEdges = useCannyEdges();
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const { setURI, setDimensions, width, height, uri } = useImageProvider();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const reader = new FileReader();
      const file = files[0];

      reader.onload = (e) => {
        const result = e.target?.result as string;

        setURI(result);

        getCannyEdges({
          url: result,
          minThreshold: 20,
          maxThreshold: 50,
          useL2Gradient: true,
          useRigidLines: true,
        }).then(({ points: lines, width, height }) => {
          const temp_components = [];

          for (let i = 0; i < lines.length; ++i) {
            const points = lines[i];

            const red = randomInteger(0, 255);
            const green = randomInteger(0, 255);
            const blue = randomInteger(0, 255);
            const stroke = `rgb(${red}, ${green}, ${blue})`;

            temp_components.push(
              <Line key={i} points={points} stroke={stroke} strokeWidth={2} />
            );
          }

          setComponents(temp_components);
          setDimensions({ width, height });
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <AppContent className="site-layout-background">
            {!uri && (
              <>
                <h1>Upload file</h1>
                <input
                  type="file"
                  onChange={handleUpload}
                  name="image"
                  accept="image/*"
                />
              </>
            )}
            <Canvas width={width} height={height}>
              {components}
            </Canvas>
          </AppContent>
        </Layout>
      </Layout>
    </AppContainer>
  );
}

export default App;
