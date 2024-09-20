document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const emailInput = document.querySelector("#exampleInputEmail1");
  const emailInvalidFeedback = document.querySelector("#emailInvalid");
  const emailRequiredFeedback = document.querySelector("#emailRequired");
  const passwordInput = document.querySelector("#exampleInputPassword1");
  const passwordRequiredFeedback = document.querySelector("#passwordRequired");
  const passwordInvalidFeedback = document.querySelector("#passwordInvalid");

  form.addEventListener("submit", (event) => {
    let valid = true;

    // Reset error messages and styles
    emailInput.classList.remove("is-invalid", "is-valid");
    emailInvalidFeedback.style.display = "none";
    emailRequiredFeedback.style.display = "none";
    passwordInput.classList.remove("is-invalid", "is-valid");
    passwordRequiredFeedback.style.display = "none";
    passwordInvalidFeedback.style.display = "none";

    // Check if email input is empty
    if (emailInput.value === "") {
      emailInput.classList.add("is-invalid");
      emailRequiredFeedback.style.display = "block";
      valid = false;
    }
    // Check if email input contains '@'
    else if (!emailInput.value.includes("@")) {
      emailInput.classList.add("is-invalid");
      emailInvalidFeedback.textContent = "Email must include an '@' symbol.";
      emailInvalidFeedback.style.display = "block";
      valid = false;
    }
    // Check if email input ends with '.'
    else if (!emailInput.value.includes(".")) {
      emailInput.classList.add("is-invalid");
      emailInvalidFeedback.textContent = "Email must include ' . '";
      emailInvalidFeedback.style.display = "block";
      valid = false;
    } else {
      // Email is valid
      emailInput.classList.add("is-valid");
    }

    // Check if password input is empty
    if (passwordInput.value === "") {
      passwordInput.classList.add("is-invalid");
      passwordRequiredFeedback.style.display = "block";
      valid = false;
    }
    // Check if password input is less than 6 characters
    else if (passwordInput.value.length < 6) {
      passwordInput.classList.add("is-invalid");
      passwordInvalidFeedback.style.display = "block";
      valid = false;
    } else {
      // Password is valid
      passwordInput.classList.add("is-valid");
    }

    if (!valid) {
      event.preventDefault(); // Prevent form from submitting
    }
  });
});
