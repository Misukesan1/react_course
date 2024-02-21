import { useState, memo, useMemo, useCallback } from "react";
import { InputTxt } from "../useMemo/form/InputTxt";


function UseCallback () {
    const [name, setName] = useState('');
    console.log('UseCallback', 'render'); // appel a chaque entrée sur l'input texte

    // // function pour simuler une valeur qui change dans le composant LoremText2Memo
    // const handleClick = () => {
    //     console.log('function handleclick');
    // }

    // // meme fonction mais en utilisant le useMemo || utiliser useCallback pour une syntaxe 
    // // plus rapide
    // const handleClick = useMemo(() => {
    //     return () => {
    //         console.log('function handleclick');
    //     }
    // }, []);

    // avec useCallback :
    const handleClick = useCallback(() => {
        console.log('function handleclick');
    }, []);

    return (
        <div className="borderBlack">
            <p>Le composant parent (UseCallback) : </p>
            <InputTxt 
                name="nameInput"
                value={name}
                label="entrez du texte pour voir les logs mémoire depuis la console"
                onChange={setName}/>
            <div>
                {name.toUpperCase()}
            </div>
            <LoremText />
            <LoremText2Memo onClick={handleClick}/>
        </div>
    );
}

function LoremText () {
    console.log('LoremText', 'render'); // appel a chaque entrée sur l'input texte
    return (
        <div className="borderRed">
            <p>Le composant enfant 1 (LoremText): </p>
            <p>Meme si ce composant ne change jamais, il est rerendu depuis le composant parent</p>
            <div className="alert alert-info mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo porro accusantium 
                possimus cum sit et sint minus aspernatur architecto libero.
            </div>
        </div>
    );
}

const LoremText2Memo = memo(function LoremText2 ({onClick}) {
    // onClick = function déclarée dans un useMemo.
    // Attention n'utiliser memo que si le composant ne change que très rarement !!
    console.log('LoremText2', 'render'); // appelé qu'une seule fois au lancement de l app
    return (
        <div className="borderBlue">
        <p>Le composant enfant 2 (LoremText2Memo) : </p>
        <p>Ce composant est enregistré dans Memo, et n'est pas rappelé tant qu'il ne change pas.
            Ce n'est qu'avec le onClick sur la div que la fonction est rappelée
        </p>
        <div onClick={onClick} className="alert alert-info mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eveniet placeat. 
            Veritatis ea adipisci labore officiis, perspiciatis repudiandae enim! Totam maxime 
            fugiat placeat nesciunt tenetur perferendis rem aspernatur voluptates numquam 
            delectus distinctio illum dolore reiciendis ipsam mollitia cupiditate voluptate 
            harum, odit in alias dolorum ut tempora quibusdam? Inventore, explicabo nesciunt.
        </div>
    </div>
    );
})

export default UseCallback;