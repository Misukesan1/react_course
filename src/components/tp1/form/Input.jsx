/**
 * 
 * @param {{placeholder: string, value: string, onChange: (e) => void}} param0 
 * @returns 
 */
export function Input ({placeholder, value, onChange}) {
    return (
        <div>
            <input 
                className="form-control"
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}