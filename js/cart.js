let cartItems = [];
let subtotal = 0;
let tax = 0;
let total = 0;
const taxRate = 0.07;
let menuVisible = false;

function updateCart() {
  cartItems.forEach((item) => {
    updateCartItem(item, item.quantity);
  });
  cartItems = getCart();
  window.location.reload();
}

function updateQuantity(item, event) {
  const inputElement = event.target;
  item.quantity = Number(inputElement.value);
}

function removeFromCart(item) {
  removeFromCart2(item);
  cartItems = getCart();
}

function calculateTotals() {
  subtotal = cartItems.reduce(
    (sum, item) => sum + item.shoe.price * item.quantity,
    0
  );
  tax = subtotal * taxRate;
  total = subtotal + tax;
}

function updateTotalElements() {
  document.getElementById("subtotal").textContent = "₱ " + subtotal.toFixed(2);
  document.getElementById("tax").textContent = "₱ " + tax.toFixed(2);
  document.getElementById("total").textContent = "₱ " + total.toFixed(2);
}

function checkout() {
  const orderDetails = {
    cartItems: cartItems,
    subtotal: subtotal,
    tax: tax,
    total: total,
  };
  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  removeFromCart2(cartItems);
  window.location.reload();
  alert("Successfully Checkout");
}

function menuToggle() {
  menuVisible = !menuVisible;
  const menuItems = document.getElementById("MenuItems");
  if (menuVisible) {
    menuItems.classList.add("menu-visible");
    menuItems.classList.remove("menu-hidden");
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.classList.add("menu-hidden");
    menuItems.classList.remove("menu-visible");
    menuItems.style.maxHeight = "0px";
  }
}

function goHome() {
  window.location.href = "index.html";
}

function goShop() {
  window.location.href = "shop.html";
}

function goAbout() {
  window.location.href = "about.html";
}

function goContact() {
  window.location.href = "contact.html";
}

function goCart() {
  window.location.href = "cart.html";
}

function loadCart() {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
}
function removeFromCart3(itemToRemove) {
  const indexToRemove = cartItems.findIndex((item) => item === itemToRemove);

  if (indexToRemove !== -1) {
    cartItems.splice(indexToRemove, 1);
    saveCart(cartItems);
  }
}

function displayCartItems() {
  const cartItemsElement = document.getElementById("cartItems");
  if (cartItemsElement) {
    cartItemsElement.innerHTML = "";

    cartItems.forEach((item) => {
      const row = document.createElement("tr");

      const imgNameRemoveCell = document.createElement("td");
      imgNameRemoveCell.classList.add("cart-info");

      const image = document.createElement("img");
      image.src = item.shoe.imgUrl;
      imgNameRemoveCell.appendChild(image);

      const nameRemoveDiv = document.createElement("div");

      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = item.shoe.name;
      nameRemoveDiv.appendChild(nameParagraph);

      const removeLink = document.createElement("a");
      removeLink.textContent = "Remove";
      removeLink.onclick = function () {
        removeFromCart3(item);
        displayCartItems();
      };
      nameRemoveDiv.appendChild(removeLink);

      imgNameRemoveCell.appendChild(nameRemoveDiv);

      row.appendChild(imgNameRemoveCell);


      const sizeCell = document.createElement("td");
      sizeCell.textContent = item.size;
      row.appendChild(sizeCell);

      const quantityCell = document.createElement("td");
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = item.quantity;
      quantityInput.min = "1";
      quantityInput.oninput = function (event) {
        updateQuantity(item, event);
        displayCartItems();
      };
      quantityCell.appendChild(quantityInput);
      row.appendChild(quantityCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = "₱ " + item.quantity * item.shoe.price;
      row.appendChild(priceCell);

      cartItemsElement.appendChild(row);
    });
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartItem(item, quantity) {
  const cart = loadCart();
  const index = cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    cart[index].quantity = quantity;
    saveCart(cart);
  }
}

function removeFromCart2(item) {
  let cart = loadCart();
  cart = cart.filter((cartItem) => cartItem.id !== item.id);
  saveCart(cart);
}

function getCart() {
  return loadCart();
}

cartItems = getCart();
displayCartItems();
calculateTotals();
updateTotalElements();
console.log(cartItems);
