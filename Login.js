// Form validation and navigation logic
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from refreshing the page

    // Clear any previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let isValid = true;

    // Validate email
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required";
      document.getElementById("email").style.borderColor = "red";
      isValid = false;
    } else {
      document.getElementById("email").style.borderColor = "#ccc";
    }

    // Validate password
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      document.getElementById("password").style.borderColor = "red";
      isValid = false;
    } else {
      document.getElementById("password").style.borderColor = "#ccc";
    }

    // If the form is valid, navigate to another page
    if (isValid) {
      window.location.href = "Project1.html"; // Replace with the target URL
    }
  });