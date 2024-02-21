import { useEffect, useState } from "react";
import { Input } from "./form/Input";

function Decompte () {
    const [ inputValue, setInputValue ] = useState(5);
    const [ duration, setDuration ] = useState(inputValue);

    const changeValueDuration = (value) => {
        setInputValue(value);
        setDuration(value);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setDuration((value) => {
                if (value <= 1) {
                    clearInterval(timer);
                    return 0
                }
                return value -1;
            })
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [inputValue])

    return (
        <div>
            <h4 className="mt-5">Affichage d'un décompte déterminé.</h4>
            <Input 
                name="decompte"
                value={inputValue}
                placeholder="Entrez un chiffre"
                onChange={changeValueDuration}/>
            <p>Décompte : <strong>{duration}</strong></p>
        </div>
    );
}



export default Decompte;