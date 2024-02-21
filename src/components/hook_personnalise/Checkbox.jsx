import { useToggle } from "../hooks/useToggle";

export function Checkbox () {
    const [ checked, setChecked ] = useToggle(false);
    return (
        <div className="mb-3">
            <input 
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}/>
        {checked && 'Je suis coché'}
        </div>
    );
}