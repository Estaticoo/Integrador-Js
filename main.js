
import { saveinLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/Categories";
import { handleSearchProductByName } from "./src/services/search";
import { openModal } from "./src/views/popUp";
import { handleGetProductStore } from "./src/views/store";
import './style.css'



//Aplicacion




export let categoriaActiva  = null;
export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn;
}

export let productoActivo  = null;
export const setProductoActivo = (productoIn) =>{
    productoActivo = productoIn;
}


handleGetProductStore();
renderCategories();


//HEADER 
const buttonAdd = document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click', ()=>{
    openModal();    
});

//SEARCH

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click',()=>{
    handleSearchProductByName();
})






