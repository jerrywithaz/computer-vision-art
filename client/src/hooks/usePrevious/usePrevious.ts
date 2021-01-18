import { useRef, useEffect } from "react";

/**
 * Custom hook for storing the previous value of some data
 * for comparison.
 * @param value The initial value.
 */
function usePrevious<Value>(value: Value): Value | undefined {
    const ref = useRef<Value>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

export default usePrevious;
