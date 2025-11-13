// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("email");
      const errorMsg = document.querySelector(".error-msg");
      if (!emailInput.checkValidity() || emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        errorMsg.style.display = "block";
      } else {
        emailInput.classList.remove("error");
        errorMsg.style.display = "none";
        const email = emailInput.value;
        window.location.href = `success.html?email=${encodeURIComponent(
          email
        )}`;
      }
    });
  }

  const successText = document.querySelector(".success-text");
  if (successText) {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
      successText.textContent = decodeURIComponent(email);
    }
  }

  const dismissBtn = document.querySelector(".dismiss-btn");
  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
