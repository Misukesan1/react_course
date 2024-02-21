export function Input ({name, value, placeholder, onChange}) {
    return (
        <input 
            className="form-control mb-3" 
            type="text" 
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}