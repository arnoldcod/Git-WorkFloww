// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple client-side validation (for demonstration purposes)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page or perform other actions
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});
