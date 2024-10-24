import {setProductoActivo } from "../../main";
import { HandleGetProductoLocalStorage } from "../persistence/localStorage";
import { openModal } from "./popUp";


export const handleGetProductStore = () => {
  const products = HandleGetProductoLocalStorage();
  handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
  const burgers = productosIn.filter((el) => el.categorias === "Hamburguesas");
  const papas = productosIn.filter((el) => el.categorias === "Papas");
  const bebidas = productosIn.filter((el) => el.categorias === "Bebidas"); 

  const renderProductGroup = (productos, titulo) => {
    if (productos.length > 0) {
      const productosHTML = productos
        .map((producto, index) => {
          return `
            <div class="containgerTargetItem">
                <div id="product-${producto.categorias}-${index}"> 
                    <div>
                        <img src="${producto.imagen}" />
                    </div>
                       <div > 
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>  
                        <div class="targetProps">
                            <p><b>Precio:</b>$ ${producto.precio}</p>     
                           
                        </div>
                       </div> 
                 </div> 
            </div> 
          `;
        })

      return `
        <section class="sectionStore">
         <div class="containerTitleSection">
            <h3>${titulo}</h3>
          </div>
        <div class="containerProductStore">
            ${productosHTML.join("")}
          </div>
        </section>
      `;
    } else {
      return "";
    }
  };

  // Renderizar cada grupo de productos en su categoría correspondiente
  const appContainer = document.getElementById("storeContainer");
  appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(bebidas, "Bebidas")}
  `;

  // Función para agregar eventos a los productos
  const addEvents = (productos, categoria) => {
    productos.forEach((element, index) => {
      const productContainer = document.getElementById(
        `product-${element.categorias}-${index}`
      );

      if (productContainer) {
        productContainer.addEventListener("click", () => {
          setProductoActivo(element);
          openModal();
        });
      }
    });
  };

  // Agregar eventos para cada categoría de productos
  addEvents(burgers, "Hamburguesas");
  addEvents(papas, "Papas");
  addEvents(bebidas, "Bebidas");
};
