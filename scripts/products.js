// Product data stored in an object
const productData = {
    "Nintendo": {
        "gameboy-classic": {
            name: "Gameboy Classic",
            description: "Ein klassischer Handheld von Nintendo.",
            price: 84.99,
            image: "images/Nintendo-gameboy-classic.png",
            alt: "Gameboy Classic Bild"
        },
        "gameboy-color": {
            name: "Gameboy Color",
            description: "Ein klassischer Handheld von Nintendo.",
            price: 149.99,
            image: "images/Nintendo-gameboy-color.png",
            alt: "Gameboy Color Bild"
        },
        "nes": {
            name: "Nintendo Entertainment System",
            description: "Beschreibung",
            price: 399.99,
            image: "images/Nintendo-NES.png",
            alt: "NES Bild"
        },
        "gamecube": {
            name: "Gamecube",
            description: "Beschreibung",
            price: 129.99,
            image: "images/Nintendo-gamecube.png",
            alt: "Gamecube Bild"
        },
        {
            id: "virtual-boy",
            name: "Virtual Boy",
            description: "Eine der ersten VR Konsolen.",
            price: 499.99,
            image: "images/Nintendo-virtual-boy.png",
            alt: "Virtual Boy Bild"
        },
    ],
    
    "Sega": [
        {
            id: "master-system",
            name: "SEGA Master System",
            description: "Beschreibung",
            price: 129.99,
            image: "images/SEGA-master-system.png",
            alt: "SEGA Master System Bild"
        },
        {
            id: "saturn",
            name: "SEGA Saturn",
            description: "Beschreibung",
            price: 179.99,
            image: "images/SEGA-saturn.png",
            alt: "SEGA Saturn Bild"
        },
        {
            id: "mega-drive",
            name: "SEGA Mega Drive",
            description: "Beschreibung",
            price: 149.99,
            image: "images/SEGA-mega-drive.png",
            alt: "SEGA Mega Drive Bild"
        },
        {
            id: "md-nomad",
            name: "SEGA MD Nomad",
            description: "Beschreibung.",
            price: 499.99,
            image: "images/SEGA-nomad.png",
            alt: "SEGA Nomad Bild"
        }
    ],
    
    "Atari": [
        {
            id: "atari-2600",
            name: "Atari 2600",
            description: "Der Klassiker unter den Spielkonsolen.",
            price: 229.99,
            image: "images/Atari-2600.png",
            alt: "Atari 2600 Bild"
        },
        {
            id: "atari-jaguar",
            name: "Atari Jaguar",
            description: "Eine der ersten 64-bit Konsolen.",
            price: 699.99,
            image: "images/Atari-jaguar.png",
            alt: "Atari Jaguar Bild"
        },
        {
            id: "atari-lynx",
            name: "Atari Lynx",
            description: "Beschreibung.",
            price: 219.99,
            image: "images/Atari-lynx.png",
            alt: "Atari Lynx Bild"
        }
    ]
};

// Function to generate the product layout dynamically
function generateProductLayout() {
    const container = document.getElementById("product-container");

    for (const category in productData) {
    // Create category title
    const categoryTitle = document.createElement("h2");
    categoryTitle.id = `category-${category.toLowerCase()}`;
    categoryTitle.textContent = category;
    container.appendChild(categoryTitle);

    // Create product section
    const section = document.createElement("section");
    section.classList.add("products-grid");
    section.id = category;

    for (const productKey in productData[category]) {
        const product = productData[category][productKey]; // Get product object

        // Create product div
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.id = productKey; // Set ID to the dictionary key

        // Create product image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.alt;

        // Create product details div
        const detailsDiv = document.createElement("div");

        // Product name
        const productName = document.createElement("h3");
        productName.textContent = product.name;

        // Product description
        const productDesc = document.createElement("p");
        productDesc.textContent = product.description;

        // Product price
        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.innerHTML = `<strong>${product.price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</strong>`;

        // Buy button
        const button = document.createElement("button");
        button.textContent = "In den Warenkorb";

        // Append elements
        detailsDiv.appendChild(productName);
        detailsDiv.appendChild(productDesc);
        detailsDiv.appendChild(productPrice);
        detailsDiv.appendChild(button);

        productDiv.appendChild(img);
        productDiv.appendChild(detailsDiv);
        section.appendChild(productDiv);
    }

    container.appendChild(section);
}
}

// Run function on page load
document.addEventListener("DOMContentLoaded", generateProductLayout);
