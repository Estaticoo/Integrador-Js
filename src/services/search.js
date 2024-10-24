import { HandleGetProductoLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = ()=>{
    const inputHeader = document.getElementById("inputHeader");
    const products =  HandleGetProductoLocalStorage();

    
    const result = products.filter((el) => el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
    
}