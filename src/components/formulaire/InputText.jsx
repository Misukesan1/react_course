import { useState } from "react";

export function InputText () {
    
    const [ inputControl, setInputControl ] = useState('');
    const handleChange = (e) => {
        setInputControl(e.target.value);
    }

    const resetInputControl = () => {
        setInputControl('');
    }
    
    const [ inputNoControl, setInputNoControl ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(formData.get('inputNoControl'));
        setInputNoControl(formData.get('inputNoControl'));
    }

    const [ textarea, setTextarea ] = useState('');
    const handleChangeTextarea = (e) => {
        setTextarea(e.target.value);
    }

    const [ checked, setChecked ] = useState(false);
    const toggleCheck = () => {
        setChecked(!checked);
    }

    return (
        <form onSubmit={handleSubmit} className="container boxShadow mt-3 mb-3 p-3">
            <div>
                <p>Champ contrôlé par React</p>
                {/* requiert value="" && onChange={} */}
                <input className="mb-3" type="text" name="" id="" value={inputControl} onChange={handleChange} />
                {inputControl}
                <input type="button" value="Reset" onClick={resetInputControl}/>
            </div>
            <div>
                <p>Champ non contrôlé</p>
                {/* pas de value="" ni de oneChange={} */}
                <input className="mb-3" type="text" name="inputNoControl" id="" defaultValue={inputNoControl}/>
                {inputNoControl}
                <input type="submit" value="Envoyer" />
            </div>
            <div>
                {/* requiert value="" && onChange={} */}
                <p>Textarea et checkbox contrôlés par React</p>
                <textarea name="" id="" cols="30" rows="5" value={textarea} onChange={handleChangeTextarea}></textarea>
                <input type="checkbox" name="" id="" checked={checked} onChange={toggleCheck} />
                <button type="button" disabled={!checked}>Envoyer</button>
            </div>

        </form>
    );

}