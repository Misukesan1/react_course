import { useId } from "react";

export function InputTxt ({name, value, label, onChange}) {
    const id = useId(); 
    return (
        <div>
            <label 
                htmlFor={id}>{label}</label>
            <input 
                type="text" 
                className="form-control mb-3"
                name={name} 
                id={id} 
                value={value}
                onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}