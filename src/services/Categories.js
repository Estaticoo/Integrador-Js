//Categoria

import { categoriaActiva } from "../../main";
import {handleRenderList } from "../views/store";
import { HandleGetProductoLocalStorage } from "../persistence/localStorage";
const handleFilterByCategory = (categoryIn) => {
    const products = HandleGetProductoLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Bebidas":
            const result = products.filter((el) => el.categorias === categoryIn);
            handleRenderList(result);
            break;
        default:
            break;
        case "mayorPrecio":
            const result2 = products.sort((a,b) => b.precio - a.precio);
            handleRenderList(result2);

            break;
        case "menorPrecio":
            const result3 = products.sort((a,b) => a.precio - b.precio);
            handleRenderList(result3);

            break;

    }
};





export const renderCategories = () => {
    // Tomamos el elemento de la lista
    const ulList = document.getElementById("listFilter");

    // Creamos los elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Bebidas">Bebidas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    // Añadimos dinámicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    // Verificamos y manejamos el estilo del elemento actual
    const handleClick = (element) => {
        
        handleFilterByCategory(element.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            }
        });
        // Añadimos la clase 'liActive' al elemento clickeado
        element.classList.add('liActive');
    };
}
