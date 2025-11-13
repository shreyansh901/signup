document.addEventListener("DOMContentLoaded", () => {
  // For index.html: Form handling
  const form = document.getElementById("subscription-form");
  if (form) {
    const emailInput = document.getElementById("email");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        form.classList.add("error");
        return;
      }

      // If valid, redirect to success.html with email as query param
      window.location.href = `success.html?email=${encodeURIComponent(email)}`;
    });

    // Remove error on input change
    emailInput.addEventListener("input", () => {
      form.classList.remove("error");
    });
  }

  // For success.html: Display email and handle dismiss
  const userEmailSpan = document.getElementById("user-email");
  const dismissBtn = document.querySelector(".dismiss-btn");
  if (userEmailSpan && dismissBtn) {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
      userEmailSpan.textContent = decodeURIComponent(email);
    }

    dismissBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
