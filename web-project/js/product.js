let menuVisible = false;
let shoeList = [];
let allShoesList = [];
let newProducts = [];
let addedItemName;
let id;

function loadShoes() {
  try {
    const params = new URLSearchParams(window.location.search);
    id = params.get("id");
    console.log(id);
    fetchShoes();
  } catch (error) {
    console.error("Error fetching shoes:", error);
  }
}

async function fetchShoes() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    allShoesList = data;
    shoeList = allShoesList.filter((shoe) => shoe.id === id);
    selectRandomProducts();
    renderProducts();
  } catch (error) {
    console.error("Error fetching shoes:", error);
  }
}

function selectRandomProducts() {
  const shuffledShoes = shuffle(allShoesList);
  newProducts = shuffledShoes.slice(0, 3);
  console.log("Randomly selected new products:", newProducts);
  displayProducts();
}

function displayProducts() {
  const productContainer = document.getElementById("productContainer");
  if (productContainer) {
    productContainer.innerHTML = ""; // Clear previous content
    shoeList.forEach((shoe) => {
      const shoeDiv = document.createElement("div");
      shoeDiv.classList.add("row");
      shoeDiv.innerHTML = `
        <div class="col-2">
          <div class="shoe-img">
            <img src="${shoe.imgUrl}" width="100%" class="productImg" />
          </div>
        </div>
        <div class="col-2 products">
          <p>Home / Shoes</p>
          <h1>${shoe.name}</h1>
          <p>₱ ${shoe.price}</p>
          <h3>Size</h3>
          <select class="size">
            ${shoe.size
              .map((s) => `<option value="${s}">${s}</option>`)
              .join("")}
          </select>
          <input type="number" class="quantity" value="1" min="1" />
          <a onclick="addToCart()" class="btn" data-index="${shoeList.indexOf(
            shoe
          )}">Add to Cart</a>
          <h3>Product Details <i class="fa fa-indent"></i></h3>
          <br />
          <p>${shoe.description}</p>
        </div>
      `;
      productContainer.appendChild(shoeDiv);
    });
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function renderProducts() {
  const featureProductsContainer = document.getElementById(
    "featureProductsContainer"
  );
  const newProductsContainer = document.getElementById("newProductsContainer");
  newProductsContainer.innerHTML = newProducts
    .map((shoe) => createProductHtml(shoe))
    .join("");
}

function createProductHtml(shoe) {
  return `
    <div class="shoe-container">
      <a href="#" onclick="goToDetails('${shoe.id}')">
        <div class="shoe-box">
          <img src="${shoe.imgUrl}" alt="${shoe.name}" />
        </div>
        <h4>${shoe.name}</h4>
        <p>₱ ${shoe.price}</p>
      </a>
    </div>
  `;
}

function addToCart() {
  const selectedShoeIndex = event.target.dataset.index;
  const selectedSize =
    document.querySelectorAll(".size")[selectedShoeIndex].value;
  const selectedQuantity = parseInt(
    document.querySelectorAll(".quantity")[selectedShoeIndex].value
  );

  // Retrieve existing cart items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Get the selected shoe
  const selectedShoe = shoeList[selectedShoeIndex];

  // Check if the selected shoe with the same size already exists in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item.shoe.name === selectedShoe.name && item.size === selectedSize
  );

  if (existingItemIndex !== -1) {
    // If the item exists, update the quantity
    cartItems[existingItemIndex].quantity += selectedQuantity;
  } else {
    // If the item doesn't exist, add it to the cart
    const cartItem = {
      shoe: selectedShoe,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    cartItems.push(cartItem);
  }

  // Save the updated cart items back to localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
  const addedItemMessage = document.getElementById("addedItemMessage");
  addedItemMessage.innerText = `${selectedShoe.name} has been added to your cart.`; // Corrected to use selectedShoe.name
  addedItemMessage.style.display = "block";
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

function goToDetails(id) {
  window.location.href = `product.html?id=${id}`;
}

// Initial load
loadShoes();
