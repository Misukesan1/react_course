import { useState } from "react";

export function useIncrement (initialValue = 0) {
    const [ state, setState ] = useState(initialValue);
    return [
        state,
        () => setState(value => value + 1),
        () => setState(value => value - 1)
    ];
}