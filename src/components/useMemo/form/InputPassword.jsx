import { useId } from "react";

export function InputPassword ({name, value, label, onChange}) {
    const id = useId(); 
    return (
        <div>
            <label 
                htmlFor={id}>{label}</label>
            <input 
                type="password" 
                className="form-control mb-3"
                name={name} 
                id={id} 
                value={value}
                onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}