//LocalStorage

export const HandleGetProductoLocalStorage =  ()=>{

    const products = JSON.parse(localStorage.getItem("products"))
    if(products){
        return products;
    }else{
        return [];
    }

}

//guardar en LocalStorage


    //recibir el producto
export const  saveinLocalStorage = (productIn)=>{
    //traer los elementos
    let productsInLocal = HandleGetProductoLocalStorage();
    
    const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id == productIn.id
    )
    //verificar si elemento existe 
    if(existingIndex !== -1){
        
         //si existe debe reemplazarse 
        productsInLocal[existingIndex] = productIn;
    }else{
    //si no agregarse
    productsInLocal.push(productIn);
    }
    //setear el nuevo array
    localStorage.setItem("products" ,JSON.stringify(productsInLocal));
   

}