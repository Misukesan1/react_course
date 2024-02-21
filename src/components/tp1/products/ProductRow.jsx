/**
 * ligne d'un produit dans un tableau a 2 colones (nom / prix)
 * @param {{name: string, stocked: boolean, price: string}} product 
 * @returns 
 */
export function ProductRow ({product}) {

    // si product.stocked == true => undefined else color: red
    const style = product.stocked ? undefined : {color: "red"}

    return (
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}