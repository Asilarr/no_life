
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nameField = form.elements["name"];
    if (nameField.value.trim() === "") {
      alert("Please enter your name.");
      nameField.focus();
      return;
    }

    const zipField = form.elements["Zip Code"];
    const zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zipField.value)) {
      alert("Please enter a valid 5-digit zip code.");
      zipField.focus();
      return;
    }

    const countryField = form.elements["country"];
    if (countryField.value === "") {
      alert("Please select a country.");
      countryField.focus();
      return;
    }

    const genderField = form.elements["gender"];
    const isGenderSelected = Array.from(genderField).some((option) => option.checked);
    if (!isGenderSelected) {
      alert("Please select your gender.");
      genderField[0].focus();
      return;
    }

    const preferenceField = form.elements["Preferences"];
    const selectedColors = Array.from(preferenceField).filter((checkbox) => checkbox.checked);
    if (selectedColors.length < 2) {
      alert("Please select at least two color preferences.");
      preferenceField[0].focus();
      return;
    }

    const phoneField = form.elements["phone"];
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneField.value)) {
      alert("Please enter a valid 10-digit phone number.");
      phoneField.focus();
      return;
    }

    const emailField = form.elements["email"];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
      alert("Please enter a valid email address.");
      emailField.focus();
      return;
    }

    const passwordField = form.elements["password"];
    if (passwordField.value.length < 6 || passwordField.value.length > 8) {
      alert("Please enter a password between 6 and 8 characters.");
      passwordField.focus();
      return;
    }

    // If all fields are valid, submit the form
    alert("Form submitted successfully!");
    form.reset();
});

