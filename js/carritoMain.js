const shoppingCartItemContainer = document.querySelector(".shoppingCartItemsContainer");//Declaramos una variable global que usaremos luego

//Fetchear wl producto

const fetchData = async () => {
    try {
    const res = await fetch("products.json");
    const data = await res.json();
 console.log(data[1])
pintarProductos(data)
    }
    catch (error) {
        console.log(error)
    }
}



function pintarProductos(data) {
        document.querySelector(".first-img").src = data[0].img;
        document.querySelector(".first-price").textContent = data[0].precio + `€`;
        document.querySelector(".first-title").textContent = data[0].name;
        document.querySelector(".second-img").src = data[1].imgDos;
        document.querySelector(".second-price").textContent = data[1].precioDos + `€`;
        document.querySelector(".second-title").textContent = data[1].nameDos;
};
  


fetchData()

const addToShoppingAcrtButtons = document.querySelectorAll(".addToCart");//LLamamos a todos los botones de agregar al carrito


// console.log(addToShoppingAcrtButtons)
 addToShoppingAcrtButtons.forEach(addCartButton => {//iteramos sobre cada boton con un evento de click
     addCartButton.addEventListener("click", addToCartClicked)
 })


function addToCartClicked(event) {//Cada boton que clickeamos
const button = event.target
const item = button.closest(".item");//Capturar el elemento mas cercano a button con esa clase
// console.log(item);//verificamos que nos entregue todos los elementos dentro del div con clase item
const itemTitle = item.querySelector(".item-title").textContent;//llamar al titulo desde el item que tenemos capturado(ya que es el div completo)
//  console.log(itemTitle);//revisamos si capturamos el titulo del item
const itemPrice = item.querySelector(".item-price").textContent;//capturar el precio
// console.log(itemPrice);
const itemImg = item.querySelector(".item-image").src;//capturar la imagen
// console.log(itemImg)
addItemToShoppingCart(itemTitle, itemPrice, itemImg)//Creamos otra funcion por que sino se haria muy grande

}

function addItemToShoppingCart (itemTitle, itemPrice, itemImg){//tomamos como parametros los argumentos de la funcion
    // console.log(itemTitle, itemPrice, itemImg);//Verificamos que nos entregue el titulo, precio e img
const elementTitle = shoppingCartItemContainer.getElementsByClassName("shoppingCartItemTitle");

 for (let i = 0; i < elementTitle.length; i++) {//Comrpobaremos si el elemento que estamos iterando es igual al item.title que ya tenemos para que no se repitan
   if(elementTitle[i].innerText === itemTitle){
    //Con los tres parentElement iremos al div que contiene todo para traer a la clase de shoppingCartItemQuantity
 let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemQuantity")
 
  elementQuantity.value ++//Cada vez que agregamos un producto sumara su valor(la cantidad)
//  console.log( elementTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemQuantity"))
$(".toast").toast("show")//Un mensaje de boostrap que hara aparecer un mensaje cada vez que agregamos dos veces un producto
   updateShoppingCartTotal()
return;//Devolvera el valor y saldra de la funcion para que no se agrege el mismo producto
   }

 }


   const shoppingCartRow = document.createElement("div");//Crearemos una fila
   const shoppingCartContent = `<div class="row shoppingCartItem">
   <div class="col-6">
       <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <img src='${itemImg}' class="shopping-cart-image">
           <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
           </h6>
       </div>
   </div>
   <div class="col-2">
       <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
       </div>
   </div>
   <div class="col-4">
       <div
           class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
           <input class="shopping-cart-quantity-input  shoppingCartItemQuantity" style="width: 40px; border-radius: 20%" type="number"
               value="1" onchange="QuantityChange(event)">
           <button class="btn btn-danger buttonDelete" onclick="removeShoppingCartItem(event)"type="button">X</button>
       </div>
   </div>
</div>`

shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemContainer.appendChild(shoppingCartRow);

//Llamaremos a la funcion para sumar los totales
updateShoppingCartTotal()

}

function updateShoppingCartTotal(){//Crearemos la funcion para llamar los totales
let total = 0;
const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");//Volvemos a llamar a todos los items

 shoppingCartItems.forEach((shoppingCartItem) => {//Operaremos sobre los items nuevamente

  const shoppingCartItemPriceElement =  shoppingCartItem.querySelector(".shoppingCartItemPrice")

//  console.log(shoppingCartItemPriceElement)
  const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("€", ""));//nos dara el precio, le quitaremos el simbolo de euros y lo cambiaremos por un string vacio
  //El number convertira lo que hay dentro a numero
// console.log(shoppingCartItemPrice)
 const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(".shoppingCartItemQuantity");

 const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

 //  console.log( shoppingCartItemQuantity)//verificamos que nos traiga el valor de la cantidad
 total = total + shoppingCartItemPrice * shoppingCartItemQuantity//total va a ser igual al total mas el precio del item por la cantidad que hay
 })


 shoppingCartTotal.innerHTML=`${total.toFixed(2)}€ `//Lo pintamos en el HTML
}


function removeShoppingCartItem(event){
const buttonClicked = event.target;
// console.log(buttonClicked)
buttonClicked.closest(".shoppingCartItem").remove();
updateShoppingCartTotal() //Llamamos a esta funcion para que si removemos un item remueva el precio del total

}

function QuantityChange(event){
  const input =  event.target
  input.value <= 0 ? input.value = 1 : input.value;
  updateShoppingCartTotal()
}

function comprarButtonClicked(){
  
    shoppingCartItemContainer.remove()
    updateShoppingCartTotal()
} 

