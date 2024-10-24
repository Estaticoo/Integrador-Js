import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

//popUp

//Abrir Modal

export const openModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "flex";
    const deleteButton = document.getElementById('deleteButton');

    if(productoActivo){
        deleteButton.style.display = "block";
    }else{
        deleteButton.style.display = "none";

    }

    if(productoActivo){
        const nombre = document.getElementById('name'),
        imagen = document.getElementById('image'),
        precio = document.getElementById('price'),
        categorias = document.getElementById('categoria');

        nombre.value = productoActivo.nombre;
        precio.value= productoActivo.precio;
        imagen.value = productoActivo.imagen;
        categorias.value = productoActivo.categorias;
    }
}
//Cerrar Modal

const buttonCancel = document.getElementById('cancelButton');
buttonCancel.addEventListener('click', ()=>{
    closeModal();
})

 export const closeModal = ()=>{
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
}

const resetModal = ()=>{
    const nombre = document.getElementById('name'),
    imagen = document.getElementById('image'),
    precio = document.getElementById('price'),
    categorias = document.getElementById('categoria');
    nombre.value = "";
    precio.value= 0;
    imagen.value = "";
    categorias.value = document.getElementById('defaultOption').value; 
}

const buttonDelete = document.getElementById('deleteButton');
buttonDelete.addEventListener('click', ()=>{
    hanldeButtonDelete();   
})


const hanldeButtonDelete = ()=>{
    handleDeleteProduct();
}