document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  alert('Signup successful!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (username === storedUsername && password === storedPassword) {
      document.getElementById("form-container").style.display = "none";
      document.getElementById("form-container1").style.display = "none";
      document.getElementById("myBtnContainer").style.display = "block";
  } else {
      alert('Invalid username or password.');
  }
});

function home() {
  document.getElementById("myBtnContainer").style.display = "block";
  document.getElementById("pokedexbutton1").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "none";
  document.getElementById("pokedexbutton3").style.display = "none";
  document.getElementById("pokedexbutton4").style.display = "none";
  document.getElementById("pokedexbutton5").style.display = "none";
  document.getElementById("pokedexbutton6").style.display = "none";
  document.getElementById("dynamax-information").style.display = "none";
  document.getElementById("dynamax-pokedex").style.display = "none";
  document.getElementById("myHome").style.display = "none";
}

function dynamaxinformation() {
  document.getElementById("myBtnContainer").style.display = "none";
  document.getElementById("dynamax-information").style.display = "block";
  document.getElementById("myHome").style.display = "block";
}

function dynamaxpokedex() {
  document.getElementById("myBtnContainer").style.display = "none";
  document.getElementById("dynamax-pokedex").style.display = "block";
  document.getElementById("myHome").style.display = "block";
  document.getElementById("pokedexbutton1").style.display = "block";
  document.getElementById("pokedexbutton2").style.display = "block";
  document.getElementById("pokedexbutton3").style.display = "block";
  document.getElementById("pokedexbutton4").style.display = "block";
  document.getElementById("pokedexbutton5").style.display = "block";
  document.getElementById("pokedexbutton6").style.display = "block";
}