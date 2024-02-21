import { useReducer } from "react";

function reducer (state, action) {
    console.log(state, action);
    if (action.type == 'REMOVE_TODO') {
        return {
            ...state, // récupérer l'objet initial
            todos: state.todos.filter(e => e !== action.item)
        };
    }
    if (action.type == 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map(e => e === action.item ? {
                ...e,
                checked: !e.checked
            } : e)
        }
    }
    if (action.type == 'CLEAR_COMPLETE') {
        return {
            ...state,
            todos: state.todos.filter(e => !e.checked)
        }
    }
    if (action.type == 'TOGGLE_COMPLETE') {
        return {
            ...state,
            showComplete: !state.showComplete
        }
    }
    return state;
}

function UseReducer () {

    const [state, dispatch] = useReducer(reducer, {
        showComplete: true,
        todos: [
            {
                name: 'Faire les courses',
                checked: false
            },
            {
                name: 'Nettoyer la maison',
                checked: false
            },
            {
                name: 'Faire le souper',
                checked: false
            },
            {
                name: 'Lire un livre',
                checked: false
            },
        ],
    });

    const visibleTask = state.showComplete ? state.todos : state.todos.filter(
        e => !e.checked
    )

    return (
        <div>
            <p>
                <input className="form-check-input" type="checkbox"
                checked={state.showComplete}
                onChange={() => dispatch({type: 'TOGGLE_COMPLETE'})} />
                Afficher les tâches terminées
            </p>
            <ul>
                {visibleTask.map((e, index) => {
                    return (
                        <li 
                        key={index}>
                            <input className="form-check-input" type="checkbox"
                                onChange={() => dispatch({type: 'TOGGLE_TODO', item: e})}
                                checked={e.checked} />
                            {e.name}
                            <button onClick={() => dispatch({type: 'REMOVE_TODO', item: e})}>Supprimer</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => dispatch({type: 'CLEAR_COMPLETE'})}>Supprimer les tâches terminées</button>

        </div>
    );
}

export default UseReducer;