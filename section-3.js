function addNumber(number)
{
    const password = document.getElementById("password");

    if(password.value.length < 4)
    {
        password.value += number;
    }
}


function clearPassword()
{
    document.getElementById("password").value = "";
}


function deleteNumber()
{
    const password = document.getElementById("password");

    password.value = password.value.slice(0, -1);
}


function login()
{
    const password = document.getElementById("password").value;
    const message = document.getElementById("password-message");
    const image = document.querySelector(".section_3 .letter > img");
    const letter = document.querySelector(".section_3 .letter");

    if(
        password.length === 4 &&
        password[0] === "1" &&
        password[1] === "6"
    )
    {
        document.getElementById("password-box").style.display = "none";

        image.style.display = "block";


        letter.scrollLeft = letter.scrollWidth;
    }
    else
    {
        message.textContent = "Wrong password!";
        document.getElementById("password").value = "";
    }
}