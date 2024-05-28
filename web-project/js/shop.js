let menuVisible = false;
let shoeList = [];
let filteredList = [];

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
    filteredList = shoeList;
    renderShoes();
  } catch (error) {
    console.error("Error fetching shoes:", error);
  }
}

function onSortChange(event) {
  const value = event.target.value;
  switch (value) {
    case "price":
      sortShoeListByPrice();
      break;
    case "asc":
      sortShoeListAscending();
      break;
    case "desc":
      sortShoeListDescending();
      break;
    default:
      filteredList = shoeList;
      break;
  }
  renderShoes();
}

function sortShoeListByPrice() {
  filteredList = [...shoeList].sort((a, b) => a.price - b.price);
}

function sortShoeListAscending() {
  filteredList = [...shoeList].sort((a, b) => a.name.localeCompare(b.name));
}

function sortShoeListDescending() {
  filteredList = [...shoeList].sort((a, b) => b.name.localeCompare(a.name));
}

function filterList(event) {
  const searchTerm = event.target.value.toLowerCase();
  filteredList = shoeList.filter((data) =>
    data.name.toLowerCase().includes(searchTerm)
  );
  renderShoes();
}

function renderShoes() {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
  filteredList.forEach((shoe) => {
    const shoeElement = document.createElement("div");
    shoeElement.classList.add("shoe-container");
    shoeElement.innerHTML = `
      <div class="shoe-box" onclick="goToDetails('${shoe.id}')">
        <img src="${shoe.imgUrl}" alt="${shoe.name}" />
      </div>
      <h4>${shoe.name}</h4>
      <p>₱ ${shoe.price}</p>
    `;
    productsContainer.appendChild(shoeElement);
  });
}

function goToDetails(id) {
  window.location.href = `product.html?id=${id}`;
}
