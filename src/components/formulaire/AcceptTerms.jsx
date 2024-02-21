import { useState } from "react";

// element parent
export function AcceptTerms () {

    const [ isTermsAccepted, setIsTermsAccepted ] = useState(false);

    return (
        <form className="container boxShadow mt-3 mb-3 p-3">
            <CheckCheckbox checked={isTermsAccepted} onCheck={setIsTermsAccepted}/>
            <button className="mt-3" disabled={!isTermsAccepted} type="submit">Envoyer le formulaire</button>
        </form>
    );
}

// element enfant
function CheckCheckbox ({checked, onCheck}) {
    return (
        <div>
            <input 
                type="checkbox" 
                onChange={(e) => onCheck(e.target.checked)} // bolean
                checked={checked}/>
            Accepter les conditions d'utilisation
        </div>
    );
}