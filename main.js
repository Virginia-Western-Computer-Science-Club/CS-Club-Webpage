
// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch navbar.html file
    fetch("/navbar.html")
        .then(function(response) {
            return response.text(); // Convert response to text
        })
        .then(function(data) {
            document.getElementById("navbar-load").innerHTML = data; // Insert HTML
        })
        .catch(function(error) {
            console.error("Error loading navbar:", error); // Handle errors
        });
});
