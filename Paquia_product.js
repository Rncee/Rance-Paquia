import { products } from "./Paquia.js";

let cart = [];
let html = "";

products.forEach((item, i) => {
  let imgTag = "";

  if(item.productName.includes("Mountain")){
    imgTag = `<img src="everest-pro-matt-balck.webp"
    width="180"
    height="180"
    style="object-fit:cover;
    border-radius:8px;
    margin-bottom:10px;">`;
  } 
  else if(item.productName.includes("Devel")){
    imgTag = `<img src="FB_IMG_1777515595120.jpg"
    width="180" height="180"
    style="object-fit:cover;
    border-radius:8px;
    margin-bottom:10px;">`;
  } 
  else if(item.productName.includes("Elves")){
    imgTag = `<img src="FB_IMG_1777515649866.jpg"
    width="180" height="180"
    style="object-fit:cover;
    border-radius:8px;
    margin-bottom:10px;">`;
  }

  html += `
    <div style="border:1px solid #ddd; padding:15px; text-align:center; border-radius:10px;">
      ${imgTag}
      <h4>${item.productName}</h4>
      <p>Price: PHP${item.price}</p>
      <p>Stock: ${item.quantity}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
    </div>
  `;
});

document.getElementById("product-parent").innerHTML = html;

window.addToCart = function(index) {
  cart.push(products[index]);
  showCart();
};

function showCart() {
  let cartHtml = "";
  let totalPrice = 0;

  cart.forEach((item, i) => {
    totalPrice += item.price;
    cartHtml += `
      <div>
        ${item.productName} - PHP,${item.price}
        <button onclick="deleteItem(${i})">Remove</button>
      </div>
    `;
  });

  document.getElementById("cart-items").innerHTML = cartHtml;
  document.getElementById("cart-total").textContent = "Total: PHP," + totalPrice;
}

window.deleteItem = function(index) {
  cart.splice(index, 1);
  showCart();
};

document.getElementById("clear-cart").onclick = function() {
  cart = [];
  showCart();
};


