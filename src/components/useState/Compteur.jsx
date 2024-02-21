import { useState } from "react";

export function Compteur () {

    const [ count, setCount ] = useState(0); // valeur de count initiale (0)
    const [ texte, setTexte ] = useState('Texte défaut');

    const increment = () => {

        // sans récupérer l'état actuel de la variable count 
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1); // s'incrémente de 1

        // // autre syntaxe qui récupère la valeur de l'état actuel
        // setCount((etatActuel) => etatActuel + 1)
        // setCount((etatActuel) => etatActuel + 1)
        // setCount((etatActuel) => etatActuel + 1) // s'incrémente de 3

    }

    const changeText = () => {
        if (texte == 'Nouveau texte') {
            setTexte((etat) => etat = 'Texte défaut');
        } else {
            setTexte((etat) => etat = 'Nouveau texte');
        }
    }

    return (
        <div className="container boxShadow mb-3 mt-3 p-3">
            <p>Déclarer useState avec une valeur unique en paramètre</p>
            <p>Compteur : {count}</p>
            <button onClick={increment}>Incrémenter</button>
            <p>Texte : {texte}</p>
            <button onClick={changeText}>Changer le texte</button>
        </div>
    );

}