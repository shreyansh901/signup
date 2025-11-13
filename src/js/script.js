document.addEventListener("DOMContentLoaded", () => {
  /* ---------- INDEX.HTML ---------- */
  const form = document.getElementById("subscription-form");
  if (form) {
    const emailInput = document.getElementById("email");
    const errorMsg = document.querySelector(".error-message");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      // ---- INVALID ----
      if (!valid) {
        form.classList.add("error"); // trigger CSS
        emailInput.focus();
        return;
      }

      // ---- VALID ----
      form.classList.remove("error");

      // **Cypress-friendly navigation**
      const url = `success.html?email=${encodeURIComponent(email)}`;
      window.location.assign(url); // full navigation
    });

    // remove error when user starts typing
    emailInput.addEventListener("input", () => form.classList.remove("error"));
  }

  /* ---------- SUCCESS.HTML ---------- */
  const userSpan = document.getElementById("user-email");
  const dismissBtn = document.querySelector(".dismiss-btn");

  if (userSpan) {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    if (email) userSpan.textContent = decodeURIComponent(email);
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      window.location.assign("index.html"); // full navigation
    });
  }
});
