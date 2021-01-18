import { useEffect } from "react";
import usePrevious from "../usePrevious";

/**
 * A custom hook to check if a prop has changed value.
 * This hook uses shallow comparison.
 * @param currentValue The current value
 * @param onChange The callback to execute if the prop changes.
 */
function useOnPropUpdated<Value>(
    currentValue: Value,
    onChange: (prev?: Value, current?: Value) => void
): void {
    const previousValue = usePrevious<Value>(currentValue);

    useEffect(() => {
        if (previousValue !== undefined && previousValue !== currentValue) {
            onChange(previousValue, currentValue);
        }
    }, [currentValue, previousValue, onChange]);
}

export default useOnPropUpdated;