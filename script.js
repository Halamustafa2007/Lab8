
document.getElementById("userForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("country", country);

    window.location.href = "display.html";
};
