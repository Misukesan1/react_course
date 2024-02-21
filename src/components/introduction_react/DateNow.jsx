
export function DateNow () {
    let dateNow = new Date().toLocaleDateString('fr-FR');
    return (
        <p>date : {dateNow}</p>
    );
}