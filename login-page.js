/* ============================= */
/* LOGIN PASSWORD */
/* ============================= */

const CORRECT_PASSWORD = "1609";


function loginNumber(number) {

    const input = document.getElementById("login-password");

    if (input.value.length < 4) {
        input.value += number;
    }

    document.getElementById("login-error").textContent = "";
}


function clearLoginPassword() {

    document.getElementById("login-password").value = "";

    document.getElementById("login-error").textContent = "";
}


function deleteLoginNumber() {

    const input = document.getElementById("login-password");

    input.value = input.value.slice(0, -1);

    document.getElementById("login-error").textContent = "";
}


function checkLogin() {

    const input = document.getElementById("login-password");
    const error = document.getElementById("login-error");
    const page = document.querySelector(".page");
    const loginPage = document.querySelector(".login-page");

    if (input.value === CORRECT_PASSWORD) {

        /* Unlock all sections */
        page.classList.remove("locked");

        /* Hide login screen */
        loginPage.style.display = "none";

    } else {

        error.textContent = "Wrong password! Try again.";

        input.value = "";

    }
}