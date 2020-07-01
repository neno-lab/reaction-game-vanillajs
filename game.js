var pocetak = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function geoLikPojava() {
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  var width = Math.random() * 300;
  if (Math.random() > 0.5) {
    document.getElementById('geo-likovi').style.borderRadius = '50%';
  } else {
    document.getElementById('geo-likovi').style.borderRadius = '0';
  }
  document.getElementById(
    'geo-likovi'
  ).style.backgroundColor = getRandomColor();
  document.getElementById('geo-likovi').style.width = width + 'px';
  document.getElementById('geo-likovi').style.height = width + 'px';
  document.getElementById('geo-likovi').style.top = top + 'px';
  document.getElementById('geo-likovi').style.left = left + 'px';
  document.getElementById('geo-likovi').style.display = 'block';
  pocetak = new Date().getTime();
}

function delayPojava() {
  setTimeout(geoLikPojava, Math.random() * 2000);
}

delayPojava();

document.getElementById('geo-likovi').onclick = function () {
  document.getElementById('geo-likovi').style.display = 'none';
  var kraj = new Date().getTime();
  var razlika = (kraj - pocetak) / 1000 + 's';
  document.getElementById('vrijeme').innerHTML = razlika;
  delayPojava();
};
