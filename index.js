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
  document.getElementById("pokedexbutton7").style.display = "none";
  document.getElementById("pokedexbutton8").style.display = "none";
  document.getElementById("pokedexbutton9").style.display = "none";
  document.getElementById("pokedexbutton10").style.display = "none";
  document.getElementById("pokedexbutton11").style.display = "none";
  document.getElementById("pokedexbutton12").style.display = "none";
  document.getElementById("pokedexbutton13").style.display = "none";
  document.getElementById("pokedexbutton14").style.display = "none";
  document.getElementById("pokedexbutton15").style.display = "none";
  document.getElementById("pokedexbutton16").style.display = "none";
  document.getElementById("pokedexbutton17").style.display = "none";
  document.getElementById("dynamax-information").style.display = "none";
  document.getElementById("dynamax-pokedex").style.display = "none";
  document.getElementById("myHome").style.display = "none";
  document.getElementById("arrowright").style.display = "none";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("pokedexbuttoninfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "none";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "none";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
}

function home1() {
  document.getElementById("myBtnContainer").style.display = "none";
  document.getElementById("pokedexbutton1").style.display = "block";
  document.getElementById("pokedexbutton2").style.display = "block";
  document.getElementById("pokedexbutton3").style.display = "block";
  document.getElementById("pokedexbutton4").style.display = "block";
  document.getElementById("pokedexbutton5").style.display = "block";
  document.getElementById("pokedexbutton6").style.display = "block";
  document.getElementById("pokedexbutton7").style.display = "block";
  document.getElementById("pokedexbutton8").style.display = "block";
  document.getElementById("pokedexbutton9").style.display = "block";
  document.getElementById("pokedexbutton10").style.display = "block";
  document.getElementById("pokedexbutton11").style.display = "block";
  document.getElementById("pokedexbutton12").style.display = "block";
  document.getElementById("pokedexbutton13").style.display = "block";
  document.getElementById("pokedexbutton14").style.display = "block";
  document.getElementById("pokedexbutton15").style.display = "block";
  document.getElementById("pokedexbutton16").style.display = "block";
  document.getElementById("pokedexbutton17").style.display = "block";
  document.getElementById("dynamax-information").style.display = "none";
  document.getElementById("dynamax-pokedex").style.display = "block";
  document.getElementById("myHome").style.display = "block";
  document.getElementById("arrowright").style.display = "block";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("myHome1").style.display = "none";
  document.getElementById("pokedexBulbasaur").style.display = "none";
  document.getElementById("pokedexBulbasaur1").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo1").style.display = "block";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexIvysaur").style.display = "none";
  document.getElementById("pokedexIvysaur1").style.display = "none";
  document.getElementById("pokedexIvysaurInfo").style.display = "none";
  document.getElementById("pokedexIvysaurInfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "block";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexVenusaur").style.display = "none";
  document.getElementById("pokedexVenusaur1").style.display = "none";
  document.getElementById("pokedexVenusaurInfo").style.display = "none";
  document.getElementById("pokedexVenusaurInfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "block";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
}

function pokedexbutton3() {
  document.getElementById("pokedexbutton1").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "none";
  document.getElementById("pokedexbutton3").style.display = "none";
  document.getElementById("pokedexbutton4").style.display = "none";
  document.getElementById("pokedexbutton5").style.display = "none";
  document.getElementById("pokedexbutton6").style.display = "none";
  document.getElementById("pokedexbutton7").style.display = "none";
  document.getElementById("pokedexbutton8").style.display = "none";
  document.getElementById("pokedexbutton9").style.display = "none";
  document.getElementById("pokedexbutton10").style.display = "none";
  document.getElementById("pokedexbutton11").style.display = "none";
  document.getElementById("pokedexbutton12").style.display = "none";
  document.getElementById("pokedexbutton13").style.display = "none";
  document.getElementById("pokedexbutton14").style.display = "none";
  document.getElementById("pokedexbutton15").style.display = "none";
  document.getElementById("pokedexbutton16").style.display = "none";
  document.getElementById("pokedexbutton17").style.display = "none";
  document.getElementById("pokedexBulbasaur").style.display = "none";
  document.getElementById("pokedexBulbasaur1").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo1").style.display = "none";
  document.getElementById("pokedexIvysaur").style.display = "none";
  document.getElementById("pokedexIvysaur1").style.display = "none";
  document.getElementById("pokedexIvysaurInfo").style.display = "none";
  document.getElementById("pokedexIvysaurInfo1").style.display = "none";
  document.getElementById("pokedexVenusaur").style.display = "block";
  document.getElementById("pokedexVenusaur1").style.display = "block";
  document.getElementById("pokedexVenusaurInfo").style.display = "block";
  document.getElementById("pokedexVenusaurInfo1").style.display = "block";
  document.getElementById("arrowright").style.display = "none";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("myHome").style.display = "none";
  document.getElementById("myHome1").style.display = "block";
  document.getElementById("pokedexbuttoninfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "none";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "none";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
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
  document.getElementById("pokedexbuttoninfo1").style.display = "block";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "block";
  document.getElementById("pokedexbuttoninfo2").style.display = "block";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbutton3").style.display = "block";
  document.getElementById("pokedexbuttoninfo3").style.display = "block";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "block";
  document.getElementById("pokedexbutton3").style.display = "block";
  document.getElementById("pokedexbutton4").style.display = "block";
  document.getElementById("pokedexbutton5").style.display = "block";
  document.getElementById("pokedexbutton6").style.display = "block";
  document.getElementById("pokedexbutton7").style.display = "block";
  document.getElementById("pokedexbutton8").style.display = "block";
  document.getElementById("pokedexbutton9").style.display = "block";
  document.getElementById("pokedexbutton10").style.display = "block";
  document.getElementById("pokedexbutton11").style.display = "block";
  document.getElementById("pokedexbutton12").style.display = "block";
  document.getElementById("pokedexbutton13").style.display = "block";
  document.getElementById("pokedexbutton14").style.display = "block";
  document.getElementById("pokedexbutton15").style.display = "block";
  document.getElementById("pokedexbutton16").style.display = "block";
  document.getElementById("pokedexbutton17").style.display = "block";
  document.getElementById("arrowright").style.display = "block";
  document.getElementById("arrowleft").style.display = "none";
}

const myImg1 = document.getElementById("pokedeximage1");
const myImg2 = document.getElementById("pokedeximage2");
const myImg3 = document.getElementById("pokedeximage3");
const myImg4 = document.getElementById("pokedeximage4");
const myImg5 = document.getElementById("pokedeximage5");
const myImg6 = document.getElementById("pokedeximage6");
const myImg7 = document.getElementById("pokedeximage7");
const myImg8 = document.getElementById("pokedeximage8");
const myImg9 = document.getElementById("pokedeximage9");
const myImg10 = document.getElementById("pokedeximage10");
const myImg11 = document.getElementById("pokedeximage11");
const myImg12 = document.getElementById("pokedeximage12");
const myImg13 = document.getElementById("pokedeximage13");
const myImg14 = document.getElementById("pokedeximage14");
const myImg15 = document.getElementById("pokedeximage15");
const myImg16 = document.getElementById("pokedeximage16");
const myImg17 = document.getElementById("pokedeximage17");
const myButton = document.getElementById("arrowright");
const myOtherButton = document.getElementById("arrowleft");

myButton.addEventListener("click", function() {
  myImg1.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//810.png";
  myImg2.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//811.png";
  myImg3.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//812.png";
  myImg4.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//813.png";
  myImg5.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//814.png";
  myImg6.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//815.png";
  myImg7.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//816.png";
  myImg8.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//817.png";
  myImg9.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//818.png";
  myImg10.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//819.png";
  myImg11.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//820.png";
  myImg12.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//831.png";
  myImg13.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//832.png";
  myImg14.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//849.png";
  myImg15.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//870.png";
  myImg16.src = "https://www.citypng.com/public/uploads/preview/white-circle-round-question-mark-icon-png-701751694963600dhjd3rpcoi.png";
  myImg17.src = "https://www.citypng.com/public/uploads/preview/white-circle-round-question-mark-icon-png-701751694963600dhjd3rpcoi.png";
});

myOtherButton.addEventListener("click", function() {
  myImg1.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png";
  myImg2.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png";
  myImg3.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png";
  myImg4.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//004.png";
  myImg5.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//005.png";
  myImg6.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png";
  myImg7.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png";
  myImg8.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//008.png";
  myImg9.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png";
  myImg10.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//092.png";
  myImg11.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//093.png";
  myImg12.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//094.png";
  myImg13.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//374.png";
  myImg14.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//375.png";
  myImg15.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//376.png";
  myImg16.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//529.png";
  myImg17.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//530.png";
});

function arrowright() {
  document.getElementById("pokedexbutton10").style.backgroundColor = 'chocolate';
  document.getElementById("pokedexbutton11").style.backgroundColor = 'chocolate';
  document.getElementById("pokedexbutton12").style.backgroundColor = 'gainsboro';
  document.getElementById("pokedexbutton13").style.backgroundColor = 'gainsboro';
  document.getElementById("pokedexbutton14").style.backgroundColor = 'purple';
  document.getElementById("pokedexbutton15").style.backgroundColor = 'brown';
  document.getElementById("pokedexbutton16").style.backgroundColor = 'black';
  document.getElementById("pokedexbutton17").style.backgroundColor = 'black';
  document.getElementById("pokedexbuttoninfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo18").style.display = "block";
  document.getElementById("pokedexbuttoninfo2").style.display = "none";
  document.getElementById("pokedexbuttoninfo19").style.display = "block";
  document.getElementById("pokedexbuttoninfo3").style.display = "none";
  document.getElementById("pokedexbuttoninfo20").style.display = "block";
  document.getElementById("arrowleft").style.display = "block";
  document.getElementById("arrowright").style.display = "none";
}

function arrowleft() {
  document.getElementById("arrowright").style.display = "block";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("pokedexbuttoninfo1").style.display = "block";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "block";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "block";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
  document.getElementById("pokedexbutton10").style.backgroundColor = 'purple';
  document.getElementById("pokedexbutton11").style.backgroundColor = 'purple';
  document.getElementById("pokedexbutton12").style.backgroundColor = 'purple';
  document.getElementById("pokedexbutton13").style.backgroundColor = 'lightslategrey';
  document.getElementById("pokedexbutton14").style.backgroundColor = 'lightslategrey';
  document.getElementById("pokedexbutton15").style.backgroundColor = 'lightslategrey';
  document.getElementById("pokedexbutton16").style.backgroundColor = 'chocolate';
  document.getElementById("pokedexbutton17").style.backgroundColor = 'chocolate';
}

function pokedexbutton1() {
  document.getElementById("pokedexbutton1").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "none";
  document.getElementById("pokedexbutton3").style.display = "none";
  document.getElementById("pokedexbutton4").style.display = "none";
  document.getElementById("pokedexbutton5").style.display = "none";
  document.getElementById("pokedexbutton6").style.display = "none";
  document.getElementById("pokedexbutton7").style.display = "none";
  document.getElementById("pokedexbutton8").style.display = "none";
  document.getElementById("pokedexbutton9").style.display = "none";
  document.getElementById("pokedexbutton10").style.display = "none";
  document.getElementById("pokedexbutton11").style.display = "none";
  document.getElementById("pokedexbutton12").style.display = "none";
  document.getElementById("pokedexbutton13").style.display = "none";
  document.getElementById("pokedexbutton14").style.display = "none";
  document.getElementById("pokedexbutton15").style.display = "none";
  document.getElementById("pokedexbutton16").style.display = "none";
  document.getElementById("pokedexbutton17").style.display = "none";
  document.getElementById("pokedexBulbasaur").style.display = "block";
  document.getElementById("pokedexBulbasaur1").style.display = "block";
  document.getElementById("pokedexBulbasaurInfo").style.display = "block";
  document.getElementById("pokedexBulbasaurInfo1").style.display = "block";
  document.getElementById("pokedexIvysaur").style.display = "none";
  document.getElementById("pokedexIvysaur1").style.display = "none";
  document.getElementById("pokedexIvysaurInfo").style.display = "none";
  document.getElementById("pokedexIvysaurInfo1").style.display = "none";
  document.getElementById("pokedexVenusaur").style.display = "none";
  document.getElementById("pokedexVenusaur1").style.display = "none";
  document.getElementById("pokedexVenusaurInfo").style.display = "none";
  document.getElementById("pokedexVenusaurInfo1").style.display = "none";
  document.getElementById("arrowright").style.display = "none";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("myHome").style.display = "none";
  document.getElementById("myHome1").style.display = "block";
  document.getElementById("pokedexbuttoninfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "none";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "none";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
}

function pokedexbutton2() {
  document.getElementById("pokedexbutton1").style.display = "none";
  document.getElementById("pokedexbutton2").style.display = "none";
  document.getElementById("pokedexbutton3").style.display = "none";
  document.getElementById("pokedexbutton4").style.display = "none";
  document.getElementById("pokedexbutton5").style.display = "none";
  document.getElementById("pokedexbutton6").style.display = "none";
  document.getElementById("pokedexbutton7").style.display = "none";
  document.getElementById("pokedexbutton8").style.display = "none";
  document.getElementById("pokedexbutton9").style.display = "none";
  document.getElementById("pokedexbutton10").style.display = "none";
  document.getElementById("pokedexbutton11").style.display = "none";
  document.getElementById("pokedexbutton12").style.display = "none";
  document.getElementById("pokedexbutton13").style.display = "none";
  document.getElementById("pokedexbutton14").style.display = "none";
  document.getElementById("pokedexbutton15").style.display = "none";
  document.getElementById("pokedexbutton16").style.display = "none";
  document.getElementById("pokedexbutton17").style.display = "none";
  document.getElementById("pokedexBulbasaur").style.display = "none";
  document.getElementById("pokedexBulbasaur1").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo").style.display = "none";
  document.getElementById("pokedexBulbasaurInfo1").style.display = "none";
  document.getElementById("pokedexIvysaur").style.display = "block";
  document.getElementById("pokedexIvysaur1").style.display = "block";
  document.getElementById("pokedexIvysaurInfo").style.display = "block";
  document.getElementById("pokedexIvysaurInfo1").style.display = "block";
  document.getElementById("pokedexVenusaur").style.display = "none";
  document.getElementById("pokedexVenusaur1").style.display = "none";
  document.getElementById("pokedexVenusaurInfo").style.display = "none";
  document.getElementById("pokedexVenusaurInfo1").style.display = "none";
  document.getElementById("arrowright").style.display = "none";
  document.getElementById("arrowleft").style.display = "none";
  document.getElementById("myHome").style.display = "none";
  document.getElementById("myHome1").style.display = "block";
  document.getElementById("pokedexbuttoninfo1").style.display = "none";
  document.getElementById("pokedexbuttoninfo18").style.display = "none";
  document.getElementById("pokedexbuttoninfo2").style.display = "none";
  document.getElementById("pokedexbuttoninfo19").style.display = "none";
  document.getElementById("pokedexbuttoninfo3").style.display = "none";
  document.getElementById("pokedexbuttoninfo20").style.display = "none";
}