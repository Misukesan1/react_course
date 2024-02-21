import { useState } from "react";

export function useToggle (bool) {
    const [ state, setState ] = useState(bool);
    const toggle = () => {
        setState(value => !value);
    }
    return [state, toggle];
}