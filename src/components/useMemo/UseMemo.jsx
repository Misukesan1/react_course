import { useMemo, useState } from "react";
import { InputTxt } from "./form/InputTxt";
import { InputPassword } from "./form/InputPassword";

// ici la fonction passwordSecurity() simule une latence lorsque l'on fait une saisie sur 
// les 2 inputs. Sauf avec le useMemeo();

function UseMemo () {
    const [ valueInputTxt, setValueInputTxt ] = useState('');
    const [ valueInputPassword , setValueInputPassword] = useState('');

    // // sans le useMemo(), la simulation de latence se fait sur l'input text également
    // const security = passwordSecurity(valueInputPassword);

    // avec le useMemo(), seul l'input password est concerné
    const security = useMemo(() => {
        console.log('useMemo()');
        return passwordSecurity(valueInputPassword);
    }, [valueInputPassword])
    
    return (
        <div>
            <InputTxt 
                name="nameUser"
                label="Nom d'utilisateur"
                value={valueInputTxt}
                onChange={setValueInputTxt}/>
            <InputPassword 
                name="passUser"
                label="Password"
                value={valueInputPassword}
                onChange={setValueInputPassword}/>
            Sécurité : <strong>{security}</strong>
        </div>
    );
}

function passwordSecurity(password) {
    // simuler une fausse lenteur :
    let startTime = performance.now();
    while (performance.now() - startTime < 200) {
    }

    if (password.length == 0) {
        return 'null';
    } else if (password.length < 3) {
        return 'faible';
    } else if (password.length < 6) {
        return 'moyen';
    } else {
        return 'fort';
    }
    
}



export default UseMemo;