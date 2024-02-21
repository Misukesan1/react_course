import { Checkbox } from "./Checkbox";
import { Increment } from "./Increment";
import { Increment2 } from "./Increment2";



function HookPersonalise () {

    return (
        <div>
            <p>Hook personnalisé qui change une valeur boolean que l'on utilise dans un input checkbox</p>
            <Checkbox />
            <p>Hook personnalisé qui permet d'incrémenter et de décrémenter.</p>
            <Increment />
            <p>Le même hook, mais utilisé sous forme d'objet. Avec plus d'options de contrôle. min: 0, max: 10</p>
            <Increment2 />
        </div>
    );
    
}

export default HookPersonalise;