import { useEffect, useState } from "react";
import { Input } from "./form/Input";
import { Checkbox } from "./form/Checkbox";

function UseEffect () {
    const [ checkboxShowInputs , setCheckboxShowInputs] = useState(false);


    return (
        <div>
            <Checkbox 
                id="showInputs"
                name="showInputs"
                checked={checkboxShowInputs}
                label="afficher le champ"
                onChecked={setCheckboxShowInputs}/>
            {/* On affiche les inputs si la checkbox est cochée */}
            {checkboxShowInputs && <EditTitle />}
        </div>
    );
}

function EditTitle () {
    const [ valueInputLastName, setValueInputName ] = useState('');
    const [ y, setY ] = useState(0);

    useEffect(() => {
        console.log('modification du titre');
        const originalTitle = document.title;
        document.title = valueInputLastName;
        return (() => {
            document.title = originalTitle;
        })
    }, [valueInputLastName]) // useEffect sur une variable à écouter

    useEffect(() => {
        const handler = (e) => {
            console.log('scroll');
            setY(window.scrollY);
        }
        window.addEventListener('scroll', handler);
        // pour nettoyer les effets secondaires et libérer la mémoire lorsque le composant 
        // est démonté (ici lorsque la checkbox cache les inputs).
        return () => {
            window.removeEventListener('scroll', handler);
        }
    }) // useEffect global

    return (
        <div>
            <div>scroll : {y}</div>
            <Input 
                name="nom"
                value={valueInputLastName}
                placeholder="modifier le titre du document"
                onChange={setValueInputName}/>
        </div>
    );
}

export default UseEffect;