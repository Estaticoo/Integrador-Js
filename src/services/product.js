//Guardar o modificar elementos

import Swal from 'sweetalert2'

import { productoActivo } from "../../main";
import { HandleGetProductoLocalStorage, saveinLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/popUp";
import { handleGetProductStore, handleRenderList } from "../views/store";

const saveButton = document.getElementById('addButton');

saveButton.addEventListener('click', ()=>{
  HandleSaveOrModifyElements();
})

const HandleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById('name').value,
    imagen = document.getElementById('image').value,
    precio = document.getElementById('price').value,
    categorias = document.getElementById('categoria').value;
    let object = null;
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,     
            categorias,
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,     
            categorias, 
        };  
    }
    
    Swal.fire({
        title: "Bien hecho!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });
    
    saveinLocalStorage(object);  
    handleGetProductStore(); 
    closeModal();
}

//Eliminar elemento

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Deseas eliminar este elemento?",
        text: "Si lo eliminas sera permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
           // Llama a la función para obtener los productos correctamente
            const products = HandleGetProductoLocalStorage();

        // Filtra los productos eliminando el producto activo
        const result = products.filter((el) => el.id !== productoActivo.id);

        // Guarda la nueva lista en localStorage
        localStorage.setItem("products", JSON.stringify(result));

        // Obtén la lista actualizada de productos y renderízala
        const newProducts = HandleGetProductoLocalStorage();
        handleRenderList(newProducts);

        // Cierra el modal después de la eliminación
        closeModal();
          } else{
            closeModal();
          };
       });
      };
    


