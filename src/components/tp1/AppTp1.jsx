import { useState } from "react";
import { Checkbox } from "./form/Checkbox";
import { Input } from "./form/Input";
import { ProductCategoryRow } from "./products/ProductCategoryRow";
import { ProductRow } from "./products/ProductRow";

const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function AppTp1 () {

    // etat de la checkbox :
    const [ showStockOnly, setShowStockOnly ] = useState(false);
    // etat de l'input :
    const [ searchValue, setSearchValue ] = useState('');

    // changement de la liste des produits :
    const visibleProducts = PRODUCTS.filter(product => {
        // si le produit n'est pas en stock
        if (showStockOnly && !product.stocked) {
            return false;
        }
        // si le nom du produit correspond à la valeur de l'input
        if (searchValue && !product.name.includes(searchValue)) {
            return false;
        }
        
        return true; // on retourne les autres produits
    });

    return (
        <div>
            <SearchBar
                showStockOnly={showStockOnly}
                onStockOnlyChange={setShowStockOnly} 
                searchValue={searchValue}
                onChangeSearchValue={setSearchValue}/>
            <ProductsTable products={visibleProducts}/>
        </div>
    );
}

/**
 * Affiche la barre de recherche des produits et une checkbox pour afficher les produits en stock uniquement
 * @param {{showStockOnly: boolean, onStockOnlyCHange: (e) => void, searchValue: string, onChangeSearchValue: (e) => void}} param0 
 * @returns 
 */
function SearchBar ({showStockOnly, onStockOnlyChange, searchValue, onChangeSearchValue}) {
    return (
        <div>
            <div className="mb-3">
                <Input 
                    placeholder="Rechercher..."
                    value={searchValue}
                    onChange={onChangeSearchValue}/>
                <Checkbox 
                    id="stock"
                    checked={showStockOnly}
                    label="N'afficher que les produits en stock"
                    onChange={onStockOnlyChange}/>
            </div>
        </div>
    );
}

/**
 * Crée la structure de base du tableau des produits
 * @param {{category: string, price: string, name: string, stocked: boolean}} products 
 * @returns 
 */
function ProductsTable ({products}) {

    const rows = []; // lignes ajouté dans le body du tableau
    let lastCategory = null;

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(
            <ProductCategoryRow 
                key={product.category}
                name={product.category}/>
            )
        }
        lastCategory = product.category;
        rows.push(
            <ProductRow 
                key={product.name}
                product={product}/>
        );
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default AppTp1;