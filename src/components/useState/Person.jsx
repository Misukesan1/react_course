import { useState } from "react";

export function Person () {

    const [ person, setPerson ] = useState({
        name: 'Damien',
        age: 28,
    });

    const incrementAge = () => {
        setPerson({
            ...person, // ... = récupérer les propriétés de l'objet person
            age: person.age + 1,
        });
    }

    return (
        <div className="container boxShadow mb-3 mt-3 p-3">
            <p>Déclarer useState avec un objet en paramètre</p>
            <p>nom : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={incrementAge}>Ajouter un an</button>
        </div>
    );

}