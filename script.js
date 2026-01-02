function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    alert("Admin Login Successful");
  } else {
    alert("Login Successful");
  }
}
