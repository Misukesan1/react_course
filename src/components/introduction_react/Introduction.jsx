import { DateNow } from "./DateNow";
import { Tweet } from "./Tweet";


function Introduction () {
    return (
        <div className="container boxShadow mb-3 mt-3 p-3 p-3">
            <div>
                <h1>Bonjour !</h1>
                <DateNow />{/* component simple */}
            </div>
            <div className="sectionTweet">
                {/* component avec propriétés (props en parametre dans la fonction) */}
                <Tweet name="Thibault" content="Je prépare le meilleur des repas !" />
                <Tweet name="Julien" content="On adore ça" />
                <Tweet name="Anaïs" content="je suis de sortie ce soir" />
            </div>
        </div>
    );
}

export default Introduction;