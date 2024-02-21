export function Tweet (props) { // props = propriétés passées au component la ou il est appelé

    // on peut destructurer props directement dans la fonction
    // => function Tweet ({ name, content, like })
    const { name, content } = props; // || destructuration classique

    // au click du bouton
    const onLike = () => {
        console.log('LIKE', props.name);
    }

    return (
        <div className="tweet boxShadow p-3">
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={onLike}>♥</button>
        </div>
    );
}