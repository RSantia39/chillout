//Navigation bar toggle script

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.menu-items');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});

// Remove active class when screen becomes bigger
window.addEventListener("resize", () => {

    if (window.innerWidth > 1024) {

        navbarMenu.classList.remove("active");
        navbarToggle.classList.remove("active");

    }

});


//Contact Form Validation
const userNameInput = document.getElementById('userNameInput');
const emailInput = document.getElementById('emailInput');
const numberInput = document.getElementById('numberInput');
const messageInput = document.getElementById('textareaInput');
const userNameError = document.getElementById('userNameError');
const emailError = document.getElementById('emailError');
const numberError = document.getElementById('numberError');
const textareaError = document.getElementById('textareaError');
const submitBtn = document.getElementById('submitBtn');
const statusMessage = document.getElementById('statusMessage')

function isValidUsername(username) {
    const namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    return namePattern.test(username);
}

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

function isValidNumber(number) {

    const numberPattern = /^09\d{9}$/;

    return numberPattern.test(number);
}

function isValidMessage(message) {

    return message.length >= 10;
}

submitBtn.addEventListener("click", function () {

  //get the value of the input
  const username = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const message = messageInput.value.trim();

    let isValid = true;

  //Check if name is empty or invalid
  if (username === "") {
    userNameError.textContent = "Please enter your username.";
    isValid = false;
  } else if (!isValidUsername(username)) {
    userNameError.textContent = "Invalid Name (Letters only).";
    isValid = false;
  } else {
    userNameError.textContent = "";
  }

   // EMAIL
    if (email === "") {

        emailError.textContent = "Please enter your email address.";

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;

    } else {

        emailError.textContent = "";

    }

        // CONTACT NUMBER
    if (number === "") {

        numberError.textContent =
            "Please enter your contact number.";
        isValid = false;
    } else if (!isValidNumber(number)) {

        numberError.textContent =
            "Please enter a valid 11-digit contact number.";
        isValid = false;

    } else {

        numberError.textContent = "";

    }

     // MESSAGE
    if (message === "") {

        textareaError.textContent =
            "Please enter your message.";
        isValid = false;
    } else if (!isValidMessage(message)) {

        textareaError.textContent =
            "Your message must be at least 10 characters.";
        isValid = false;
    } else {

        textareaError.textContent = "";

    }

     // ALL VALID
    if (isValid) {

        statusMessage.textContent ="Your message was successfully sent!"

        setTimeout(function() {
            statusMessage.textContent = "";
            userNameInput.value = "";
            emailInput.value = "";
            numberInput.value = "";
            textareaInput.value = "";
        }, 6000);

    }
});





