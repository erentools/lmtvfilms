function validateLogin() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  document.getElementById("loginBtn").disabled = !(user.length > 2 && pass.length > 2);
}
function validateRegister() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const usuario = document.getElementById("nuevoUsuario").value;
  const pass1 = document.getElementById("newPass").value;
  const pass2 = document.getElementById("confirmPass").value;
  document.getElementById("registerBtn").disabled = !(nombre && correo && usuario && pass1 && pass2 && pass1 === pass2);
}
function goToSending() {
  const usuario = document.getElementById("nuevoUsuario").value;
  localStorage.setItem("usuario", usuario);
  window.location.href = "enviando.html";
}
function login() {
  const user = document.getElementById("user").value;
  localStorage.setItem("usuario", user);
  window.location.href = "panel.html";
}