import { useIncrement } from "../hooks/useIncrement";

export function Increment () {
    const [ compteur, increment, decrement ] = useIncrement(0);
    return (
        <div className="mb-3">
            <button onClick={decrement} className="btn btn-secondary me-1">-</button>
            <button onClick={increment} className="btn btn-secondary me-1">+</button>
            <strong className="ps-5">{compteur}</strong>
        </div>
    );
}