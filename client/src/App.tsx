import React, { useCallback } from "react";
import { Line } from "react-konva";
import { AppContainer } from "./App.styled";
import GlobalStyles from "./components/GlobalStyles";
import useCannyEdges from "./hooks/useCannyEdges";
import randomInteger from "./utils/randomInteger";
import Header from "./features/Header";
import OpenCVPlayground from "./components/OpenCVPlayground";

function App() {
  const getCannyEdges = useCannyEdges();

  const createImage = useCallback(
    async ({ url, ...rest }: { url: string } & Record<string, any>) => {
      const { points: lines, width, height } = await getCannyEdges({
        url,
        minThreshold: 50,
        maxThreshold: 100,
        useL2Gradient: true,
        useRigidLines: true,
        ...rest
      });
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
      return { width, height, image: temp_components };
    },
    [getCannyEdges]
  );

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <OpenCVPlayground
        tools={[
          {
            name: "Min Threshold",
            type: "range",
            key: "minThreshold",
            initialValue: 50,
            min: 0, 
            max: 100
          },
          {
            name: "Max Threshold",
            type: "range",
            key: "maxThreshold",
            initialValue: 100,
            min: 0, 
            max: 200
          },
          {
            name: "Use L2 Gradient",
            type: "toggle",
            key: "useL2Gradient",
            initialValue: true,
          },
          {
            name: "Use Rigid Lines",
            type: "toggle",
            key: "useRigidLines",
            initialValue: true,
          },
        ]}
        createImage={createImage}
      />
    </AppContainer>
  );
}

export default App;
