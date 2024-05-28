let menuVisible = false;
let shoeList = [];
let featureProducts = [];
let newProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  loadShoes();
});

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

async function loadShoes() {
  try {
    const response = await fetch("data.json");
    shoeList = await response.json();
    filterFeatureProducts();
    selectRandomProducts();
    renderProducts();
  } catch (error) {
    console.error("Error fetching shoes:", error);
  }
}

function filterFeatureProducts() {
  featureProducts = shoeList
    .filter((shoe) => shoe.name.toLowerCase().includes("jordan"))
    .slice(0, 3);
}

function selectRandomProducts() {
  newProducts = shuffle(shoeList).slice(0, 3);
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

  featureProductsContainer.innerHTML = featureProducts
    .map((shoe) => createProductHtml(shoe))
    .join("");
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

function goToDetails(id) {
  window.location.href = `product.html?id=${id}`;
}
