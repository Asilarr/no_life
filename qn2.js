const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nameField = registrationForm.elements["name"];
  const namePattern = /^[A-Za-z]+$/;
  if (nameField.value.length > 30 || !namePattern.test(nameField.value)) {
    alert("Please enter a valid name with alphabets only (up to 30 characters).");
    nameField.focus();
    return;
  }

  const registerNumberField = registrationForm.elements["registerNumber"];
  const registerNumberPattern = /^[A-Za-z0-9]+$/;
  if (!registerNumberPattern.test(registerNumberField.value)) {
    alert("Please enter a valid register number with alphabets and numbers only.");
    registerNumberField.focus();
    return;
  }

  const emailField = registrationForm.elements["email"];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value)) {
    alert("Please enter a valid email address.");
    emailField.focus();
    return;
  }

  const phoneField = registrationForm.elements["phone"];
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneField.value)) {
    alert("Please enter a valid 10-digit phone number.");
    phoneField.focus();
    return;
  }

  const sameAddressCheckbox = registrationForm.elements["sameAddress"];
  const permAddressField = registrationForm.elements["permAddress"];
  const tempAddressField = registrationForm.elements["tempAddress"];

  if (sameAddressCheckbox.checked) {
    permAddressField.value = tempAddressField.value;
    permAddressField.disabled = true;
  } else {
    permAddressField.disabled = false;
  }

  alert("Form submitted successfully!");
  registrationForm.reset();
});
