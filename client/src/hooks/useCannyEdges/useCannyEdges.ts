import { useCallback } from "react";
import axios from "axios";
import usePromise from "../usePromise";

const api_url =
  "https://bxjc2f8yt0.execute-api.us-east-2.amazonaws.com/calculate_canny_edges";

type CannyEdgeApiArgs = {
  url: string;
  minThreshold: number;
  maxThreshold: number;
  useL2Gradient: boolean;
  useRigidLines: boolean;
};

type CannyEdgeApiResponse = {
  url: string;
  width: number;
  height: number;
};

type CannyEdgeApiJSON = {
  points: number[][];
};

function useCannyEdges() {
  const safePromise = usePromise();
  
  const getCannyEdges = useCallback(
    async (body: CannyEdgeApiArgs) => {
      try {
        const { data: { url, width, height  } } = await safePromise(
          axios.post<CannyEdgeApiResponse>(api_url, body)
        );
        const { data: { points } } = await safePromise(
          axios.get<CannyEdgeApiJSON>(url)
        );
        return { points, width, height  };
      } catch (error) {
        return { points: [], width: 0, height: 0 };
      }
    },
    [safePromise]
  );

  return getCannyEdges;
}

export default useCannyEdges;
