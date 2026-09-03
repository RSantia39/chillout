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

//Increment and Decrement Counter


const orderCards = document.querySelectorAll(".order_card");

const priceDisplay = document.getElementById("price");
const totalDisplay = document.getElementById("total");

const smoothiePrice = 129;
const shippingFee = 30;

orderCards.forEach((card) => {

    const decrementBtn = card.querySelector(".decrementBtn");
    const incrementBtn = card.querySelector(".incrementBtn");
    const quantity = card.querySelector(".quantity");

    incrementBtn.addEventListener("click", () => {
        let currentQuantity = Number(quantity.textContent);

        currentQuantity++;

        quantity.textContent = currentQuantity;

        calculateTotal();
    });

    decrementBtn.addEventListener("click", () => {
        let currentQuantity = Number(quantity.textContent);

        if (currentQuantity > 0) {
            currentQuantity--;

            quantity.textContent = currentQuantity;

            calculateTotal();
        }
    });

});

function calculateTotal() {

    let totalQuantity = 0;

    orderCards.forEach((card) => {

        const quantity = card.querySelector(".quantity");

        totalQuantity += Number(quantity.textContent);

    });

    const price = totalQuantity * smoothiePrice;
    const total = price + shippingFee;

    priceDisplay.textContent = price.toFixed(2);
    totalDisplay.textContent = total.toFixed(2);
}

//Reset the page
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function() {
    location.reload();
});


//Contact Form Validation
const userNameInput = document.getElementById('userNameInput');
const emailInput = document.getElementById('emailInput');
const numberInput = document.getElementById('numberInput');
const addressInput = document.getElementById('addressInput');
const userNameError = document.getElementById('userNameError');
const emailError = document.getElementById('emailError');
const numberError = document.getElementById('numberError');
const addressError = document.getElementById('addressError');
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

function isValidMessage(address) {

    return address.length >= 10;
}

submitBtn.addEventListener("click", function () {
  
  
    //get the value of the input
  const username = userNameInput.value.trim();
  const email = emailInput.value.trim();
  const number = numberInput.value.trim();
  const address = addressInput.value.trim();

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
    if (address === "") {

        addressError.textContent =
            "Please enter your address.";
        addressError.classList.add('show');
        isValid = false;
    } else if (!isValidMessage(address)) {

        addressError.textContent =
            "Your address must be at least 10 characters.";
        addressError.classList.add('show');
        isValid = false;
    } else {

        addressError.textContent = "";
        addressError.classList.remove("show");

    }

     // ALL VALID
    if (isValid) {

        statusMessage.textContent ="Your order was successfully placed!"

        setTimeout(function() {
            statusMessage.textContent = "";
            userNameInput.value = "";
            emailInput.value = "";
            numberInput.value = "";
            addressInput.value = "";
        }, 6000);

    }
});





