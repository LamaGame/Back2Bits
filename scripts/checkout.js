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
    } catch (error) {
        console.error("Error adding to cart:", error.message);
        alert("Ein Fehler ist aufgetreten. Der Warenkorb wird geleert.");
        clearCart();
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Der Warenkorb ist leer.</p>";
        return;
    }

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <p>${item.name} - ${item.quantity}x - ${(item.price * item.quantity).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €</p>
        `;

        cartContainer.appendChild(div);
    });
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

// Event listener for add-to-cart buttons
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", addToCart);
    displayCart();

    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", handleCheckout);
    }
});
