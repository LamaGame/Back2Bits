// Product data stored in an object
const productData = {
    "Nintendo": [
        {
            id: "gameboy-classic",
            name: "Gameboy Classic",
            description: "Ein klassischer Handheld von Nintendo.",
            price: 84.99,
            image: "images/Nintendo-gameboy-classic.png",
            alt: "Gameboy Classic Bild"
        },
        {
            id: "gameboy-color",
            name: "Gameboy Color",
            description: "Ein klassischer Handheld von Nintendo.",
            price: 149.99,
            image: "images/Nintendo-gameboy-color.png",
            alt: "Gameboy Color Bild"
        },
        {
            id: "nes",
            name: "Nintendo Entertainment System",
            description: "Zustand: Wie Neu",
            price: 399.90,
            image: "images/Nintendo-NES.png",
            alt: "NES Bild"
        },
        {
            id: "gamecube",
            name: "Gamecube",
            description: "Zustand: Wie Neu",
            price: 80,
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
            price: 269.99,
            image: "images/SEGA-master-system",
            alt: "SEGA Master System Bild"
        },
        {
            id: "sega-saturn",
            name: "SEGA Saturn",
            description: "Beschreibung",
            price: 269.99,
            image: "images/SEGA-saturn",
            alt: "SEGA Saturn Bild"
        },
        {
            id: "master-system",
            name: "SEGA Mega Drive",
            description: "Beschreibung",
            price: 269.99,
            image: "images/SEGA-mega-drive",
            alt: "SEGA Mega Drive Bild"
        },
    ],
    
    "Atari": [
        {
            id: "atari-2600",
            name: "Atari 2600",
            description: "Der Klassiker unter den Spielkonsolen.",
            price: 75,
            image: "images/atari-2600.png",
            alt: "Atari 2600 Bild"
        },
        {
            id: "atari-jaguar",
            name: "Atari Jaguar",
            description: "Eine der ersten 64-bit Konsolen.",
            price: 150,
            image: "images/atari-jaguar.png",
            alt: "Atari Jaguar Bild"
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
        section.id = `products-category-${category.toLowerCase()}`;
        section.classList.add("products-grid");

        productData[category].forEach(product => {
            // Create product div
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

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
        });

        // Append section to the container
        container.appendChild(section);
    }
}

// Run function on page load
document.addEventListener("DOMContentLoaded", generateProductLayout);
