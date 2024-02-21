/**
 * 
 * @param {{checked: boolean, onChange: (e) => void, label: string, id: string}} param0 
 * @returns 
 */
export function Checkbox ({checked, onChange, label, id}) {
    return (
        <div className="form-check">
            <input 
                className="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}/>
            <label 
                htmlFor={id}
                className="form-check-label">{label}</label>
        </div>
    );
}