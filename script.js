// --- 1. THE LIVE CLOCK (Working with Time & Intervals) ---

function updateClock() {
    // Grab the HTML element where the clock will go
    const clockElement = document.getElementById('live-clock');
    
    // Get the current date and time
    const now = new Date();
    
    // Format it nicely (e.g., 10:45:30 AM)
    const timeString = now.toLocaleTimeString();
    
    // Update the text on the screen
    clockElement.textContent = timeString;
}

// Run the clock immediately, then update it every 1000 milliseconds (1 second)
updateClock();
setInterval(updateClock, 1000);


// --- 2. DARK MODE TOGGLE (DOM Manipulation & Events) ---

const themeButton = document.getElementById('dark-mode-toggle');

// 'addEventListener' listens for user actions. Here, we listen for a 'click'.
themeButton.addEventListener('click', () => {
    // 'classList.toggle' adds the class if it's missing, or removes it if it's there
    // We added the .dark-mode class in our CSS file!
    document.body.classList.toggle('dark-mode');
});


// --- 3. DYNAMIC PRODUCT GENERATION (Arrays & Template Literals) ---

// In a real website, this data comes from a database. 
// For now, we simulate it with an Array of Objects.
// TO MANIPULATE: Try adding a fourth product to this array!
const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "🎧" },
    { id: 2, name: "Mechanical Keyboard", price: 129.50, image: "⌨️" },
    { id: 3, name: "Gaming Mouse", price: 49.99, image: "⚡" }
];

const gridContainer = document.getElementById('product-grid');

// Loop through each product in our array
products.forEach(product => {
    // Create a new 'article' HTML element
    const card = document.createElement('article');
    card.classList.add('product-card');

    // Use Template Literals (backticks `) to inject variables directly into HTML
    card.innerHTML = `
        <div style="font-size: 4rem;">${product.image}</div>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
    `;

    // Append (attach) the new card to the grid container on the page
    gridContainer.appendChild(card);
});


// --- 4. FORM VALIDATION (Preventing default behaviors) ---

const form = document.getElementById('subscribe-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    // preventDefault stops the page from reloading (which is what forms normally do)
    event.preventDefault();
    
    // Grab the value the user typed into the input
    const email = document.getElementById('email-input').value;
    
    // Simple logic to show a success message
    message.textContent = `Thanks for subscribing with: ${email}`;
    message.style.color = "green";
    
    // Clear the input box
    form.reset();
});