// Function to add product to cart
function addToCart(event) {
    if (!event.target.classList.contains("add-to-cart")) return;

    try {
        const category = event.target.dataset.category;
        const productKey = event.target.dataset.product;

        if (!category || !productKey) throw new Error("Invalid product data");

        const product = productData[category][productKey];
        if (!product) throw new Error("Product not found");

        // Retrieve cart from localStorage or create a new one
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product is already in the cart
        const existingProduct = cart.find(item => item.id === productKey);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: productKey,
                category: category,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.name} wurde zum Warenkorb hinzugefügt!`);
        updateCart();
    } catch (error) {
        console.error("Error adding to cart:", error.message);
        alert("Ein Fehler ist aufgetreten. Der Warenkorb wird geleert.");
        clearCart();
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cart");
    updateCart();
}

// Function to display and update cart items
function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    const cartItemsList = document.getElementById("cart-items");
    const cartItemCount = document.getElementById("cart-item-count");
    const totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !cartItemsList || !cartItemCount || !totalPriceElement) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsList.innerHTML = ""; // Clear previous content
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = "<li>Dein Warenkorb ist leer</li>";
        cartItemCount.innerText = "Produkte: 0";
        totalPriceElement.innerText = "Summe: 0.00€";
        return;
    }

    cart.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("cart-item");

        li.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name} Bild">
                <span>${item.name}</span>
            </div>
            <div class="cart-item-amount">
                <span><strong>${item.price.toFixed(2)}€ x${item.quantity}</strong></span>
            </div>
            <div class="cart-controls">
                <button class="increase" data-id="${item.id}" data-category="${item.category}">+</button>
                <button class="decrease" data-id="${item.id}" data-category="${item.category}">-</button>
            </div>
        `;
        cartItemsList.appendChild(li);

        totalPrice += item.price * item.quantity;
    });

    cartItemCount.innerText = `Produkte: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`;
    totalPriceElement.innerText = `Summe: ${totalPrice.toFixed(2)}€`;

    // Event listeners for cart controls
    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", () => changeQuantity(button.dataset.category, button.dataset.id, 1));
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", () => changeQuantity(button.dataset.category, button.dataset.id, -1));
    });
}

// Function to change product quantity in the cart
function changeQuantity(category, productKey, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = cart.find(item => item.id === productKey);
    if (!product) return;

    product.quantity += change;
    if (product.quantity <= 0) {
        cart = cart.filter(item => item.id !== productKey);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to handle checkout process
function handleCheckout() {
    try {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) throw new Error("Der Warenkorb ist leer!");

        // Simulate checkout process
        alert("Checkout erfolgreich! Vielen Dank für Ihren Einkauf.");

        // Clear the cart after successful checkout
        clearCart();
    } catch (error) {
        console.error("Checkout error:", error.message);
        alert("Ein Fehler ist aufgetreten. Der Warenkorb wird geleert.");
        clearCart();
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", addToCart);
    updateCart();

    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", handleCheckout);
    }

    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
