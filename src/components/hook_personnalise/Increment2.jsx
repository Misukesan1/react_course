import { useIncrement2 } from "../hooks/useIncrement2";

export function Increment2 () {
    const { value, increment, decrement } = useIncrement2(0, 0, 10)
    return (
        <div className="mb-3">
            <button onClick={decrement} className="btn btn-secondary me-1">-</button>
            <button onClick={increment} className="btn btn-secondary me-1">+</button>
            <strong className="ps-5">{value}</strong>
        </div>
    );
}