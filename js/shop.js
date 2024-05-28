let menuVisible = false;
let shoeList = [];
let filteredList = [];

const shoeData = [
  {
    id: "EtmbFgeiS3UZzgm07lWp",
    name: "KD 15 'B.A.D.'",
    description:
      "The Nike KD 15 B.A.D. is a low-top KD silhouette coming in a palette of Space Purple, Oxygen Purple, and Purple Cosmos hues. The 'B.A.D. ' Nike KD 15 has an upper constructed with a mix of synthetic materials and mesh, which provide breathability and support.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1899,
    quantity: 10,
    imgUrl: "images/shoes-images/KD15.jpg",
  },
  {
    id: "G4nuOwipWikOl7s2vJ3w",
    name: "Air Jordan 35 Low DS PF 'Reflexology'",
    description:
      "The Jordan 35 Low Reflexology, released in 2021, draws inspiration from reflexology, a medical practice similar to acupuncture. Reflexology involves relaxing the body through pressure points on the hands or feet, and that's what these shoes are designed to do. The sneakers are multi-color in bright colors, including red, blue, yellow, and pink. There is reflective detailing on the sides that resembles sun rays. Reflective material is also used for the Jumpman logo on the tongues. Kanji symbols on the heels and insoles, taking inspiration from the foot reflexology chart, complete the design. The upper consists of a mesh base and suede overlays, and Zoom Air units are inside the heels.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1450,
    quantity: 15,
    imgUrl: "images/shoes-images/j35_reflexology.jpg",
  },
  {
    id: "GPfMJlAzuHlXUv7E09zg",
    name: "Kyrie Low 5 'Light Madder Root'",
    description:
      "The Nike Kyrie Low 5 Madder Root is a basketball shoe that was released by Nike in 2022 as part of the signature line of Kyrie Irving-inspired sneakers. The Madder Root Kyrie Low 5 version features a predominantly Madder Root upper, with a Kyrie logo on the tongue and Nike Swooshes on the sides.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1499,
    quantity: 8,
    imgUrl: "images/shoes-images/KyrieLow5.jpg",
  },
  {
    id: "Gicu97Nao2j98O2b3iCu",
    name: "Kobe 5 Protro 'Bruce Lee'",
    description:
      "The black and yellow upper and red scratch marks nod to memorable elements from Lee's iconic career. Lower, sleeker and faster-looking than before, the Protro is fitted with a large, flexible Zoom Air unit, responsive foam and scaled-down traction for optimal court feel.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1799,
    quantity: 8,
    imgUrl: "images/shoes-images/Kobe5.jpg",
  },
  {
    id: "Mg1F0SyOvVENJ33zTwJl",
    name: "Lamelo 1 'Rick and Morty'",
    description:
      "Puma and Ricky and Morty have teamed up to give you this fresh new colourway of LaMelo Ball's first signature shoe, the MB. 01. Each foot is a different bright neon color representing the two main characters in the show. LeMelo Ball's branding and logo can be found on the tongue and rear of the shoes.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1750,
    quantity: 8,
    imgUrl: "images/shoes-images/Lamelo1.jpg",
  },
  {
    id: "NOrzECFZGFgx9abT58ox",
    name: "Jordan 37 'Beyond Borders'",
    description:
      "The Air Jordan 37 'Beyond Borders' represents the debut colorway of the Hoops performance shoe. The 37th volume in Michael Jordan's signature line features a off-white Lenoweave upper, made with 100% TPE yarn, and features a Huarache-like multi-layer outer frame for lightweight support.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1399,
    quantity: 8,
    imgUrl: "images/shoes-images/Jordan37.jpg",
  },
  {
    id: "VO9hRc1QFIL2uh9zqerD",
    name: "Nike Precision 6 'Phantom Team Red'",
    description:
      "Create space, stop in an instant, shoot off the dribble—do it all with the Nike Precision 6. It's designed to enable quick players to shift speeds and change directions while staying in control. From the plush collar and tongue to the modified herringbone traction, the agile low top lets you make the most of your skills while pushing the tempo of the game.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1850,
    quantity: 8,
    imgUrl: "images/shoes-images/NikePrecision.jpg",
  },
  {
    id: "XE8ckrV1bWMviVXE9e5w",
    name: "J1 Travis Scott 'Black Phantom'",
    description:
      "Crisp white stitching pops against premium black suede, while Cactus Jack branding on the tongue and a beetle on the left heel (symbolising progress, stability, love and nature) makes it a whole look.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1650,
    quantity: 8,
    imgUrl: "images/shoes-images/j1Travis.jpg",
  },
  {
    id: "ZFjK6pIlZOQKECP9F1T9",
    name: "Jordan Luka 1 'Quai 54'",
    description:
      "The Air Jordan Luka 1 Quai 54 is a highly anticipated release from the iconic brand. This sneaker features a sleek black and white colorway with pops of vibrant blue and red accents.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1750,
    quantity: 8,
    imgUrl: "images/shoes-images/JL1_QUAI54.jpg",
  },
  {
    id: "sFRgdqu0c6WTFV9bXHLI",
    name: "Lebron 20 'Time Machine'",
    description:
      "This new colour way of LeBron's 20th signature sneaker comes in light green, pink yellow and blue hues. This pair features a knitted upper decorated with double-stacked Swooshes on the lateral side and is finished with a midsole with a graphic print and a multidirectional rubber outsole for support.",
    size: [40, 41, 42, 43, 44, 45],
    price: 2399,
    quantity: 8,
    imgUrl: "images/shoes-images/lebron20_TM.jpg",
  },
  {
    id: "sOGnq5BwOmPBWAvmi5Sb",
    name: "Ja Morant 1 'Scratch'",
    description:
      "The Nike Ja 1 Scratch emerges as a vibrant testament to the electric playing style of Ja Morant, dressed in a Rapid Teal/Black/White/University Red/Monarch colorway. This sneaker is a visual and technical marvel, embodying the agility and dynamism that Ja brings to the court.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1599,
    quantity: 8,
    imgUrl: "images/shoes-images/j1_scratch.jpg",
  },
  {
    id: "u7LD9k8vlGtd1O3KCDmH",
    name: "Jordan Luka 1 'Next Nature'",
    description:
      "From the lush forests to the immense mountains to the scenic ocean coasts, this shoe takes its colour inspiration from the natural beauty of Luka's home country of Slovenia. Embroidered Flight Wire—think of the braided cables that support bridges—wrap around the shoe's upper to keep your feet secure and contained.",
    size: [40, 41, 42, 43, 44, 45],
    price: 1650,
    quantity: 8,
    imgUrl: "images/shoes-images/jl1_NN.jpg",
  },
];

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

function loadShoes() {
  shoeList = shoeData;
  filteredList = shoeList;
  renderShoes();
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
  filteredList = shoeList.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchTerm)
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
