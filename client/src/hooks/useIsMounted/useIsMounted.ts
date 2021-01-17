import { useCallback, useEffect, useRef } from "react";

function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  const checker = useCallback((): boolean => {
    return isMounted.current;
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return function cleanup() {
      isMounted.current = false;
    };
  }, []);

  return checker;
}

export default useIsMounted;
