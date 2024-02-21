import { useCallback, useState } from "react";

export function useIncrement2 ({initial = 0, min = 0, max = 10}) {
    const [ state, setState ] = useState(initial);
    return {
        value: state,
        // useCallback pour mémoriser la dépendance. 
        increment: useCallback(() => setState((v) => {
            if (v < max) {
                return v+1;
            } else {
                return v;
            }
        }), [max]),
        decrement: useCallback(() => setState((v) => {
            if (v > min) {
                return v-1;
            } else {
                return v;
            }
        }), [min]),
    };
}