const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const btn = document.getElementById("btn");

function login() {
    loginForm.style.left = "50px";
    signupForm.style.left = "450px";
    btn.style.left = "0";
}

function signup() {
    loginForm.style.left = "-400px";
    signupForm.style.left = "50px";
    btn.style.left = "110px";
}
