function showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    window.location.href = "admin.html";
  } else {
    alert("Login Successful");
  }
}
ssssfunction showLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    window.location.href = "admin.html";
  } else {
    alert("Login Successful");
  }
}
