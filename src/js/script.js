// script.js
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("signup-form")) {
    const form = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const errorEm = document.querySelector(".error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!isValidEmail(email)) {
        errorEm.style.display = "block";
        emailInput.style.borderColor = "rgb(255, 99, 71)";
        emailInput.style.color = "rgb(255, 99, 71)";
        emailInput.style.backgroundColor = "rgba(255, 99, 71, 0.15)"; // Softer bg for readability
      } else {
        errorEm.style.display = "none";
        emailInput.style.borderColor = "";
        emailInput.style.color = "";
        emailInput.style.backgroundColor = "";
        window.location.href = `success.html?email=${encodeURIComponent(
          email
        )}`;
      }
    });
  } else if (document.querySelector(".success-card")) {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
      const strong = document.querySelector(".success-text strong");
      strong.textContent = decodeURIComponent(email);
    }
    const dismissBtn = document.querySelector(".dismiss-btn");
    dismissBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
