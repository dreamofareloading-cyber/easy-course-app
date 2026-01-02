function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (username === "admin" && password === "123") {
    alert("Admin Login Successful");
  } else {
    alert("Wrong Username or Password");
  }
}
