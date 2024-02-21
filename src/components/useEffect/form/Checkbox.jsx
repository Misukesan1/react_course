export function Checkbox ({id, name, checked, label, onChecked}) {
    return (
        <div>
            <input 
                type="checkbox" 
                className="form-check-input"
                name={name}
                checked={checked}
                onChange={(e) => onChecked(e.target.checked)}/>
            <label 
                htmlFor={id}
                className="form-check-label">{label}</label>
        </div>
    );
}