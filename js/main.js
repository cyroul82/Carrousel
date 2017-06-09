var contacts = [];
var position = 0;
var img = document.getElementById('imageLoader');

var btnRight = document.getElementById('btnRight');
var btnLeft = document.getElementById('btnLeft');
var btnPlay = document.getElementById('btnPlay');
var btnPause = document.getElementById('btnPause');
var btnFirst = document.getElementById('btnFirst');
var btnLast = document.getElementById('btnLast');

var pictureName = document.getElementById('pictureName');
var playIcon = document.getElementById('playIcon');
var pauseIcon = document.getElementById('pauseIcon');

btnRight.addEventListener('click', nextClick, false);
btnLeft.addEventListener('click', backClick, false);
btnPlay.addEventListener('click', playClick, false);
btnPause.addEventListener('click', pauseClick, false);
btnFirst.addEventListener('click', firstClick, false);
btnLast.addEventListener('click', lastClick, false);

function Contact(name, image, id) {
  this.id = id;
  this.image = image;
  this.name = name;
}

function loadImages() {
  var image = new Image();
  image.src = 'img/renaud.jpg';
  var contact = new Contact("Renaud", image, 1);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/sebastien.gif';
  contact = new Contact("Sebastien", image, 2);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/bibiana.png';
  contact = new Contact("Bibiana", image, 3);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/cyril.png';
  contact = new Contact("Cyril", image, 4);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/jeremy.jpg';
  contact = new Contact("Jeremy", image, 5);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/julien.jpg';
  contact = new Contact("Julien", image, 6);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/nicolas.png';
  contact = new Contact("Nicolas", image, 7);
  contacts.push(contact);

  image = new Image();
  image.src = 'img/sems.jpg';
  contact = new Contact("Sems", image, 8);
  contacts.push(contact);

};

loadImages();
displayImage();

function displayImage() {
  img.src = contacts[position].image.src;
  pictureName.innerHTML = contacts[position].name;
}

function playClick() {
  console.log("dans play");
  btnPlay.style.display = "none";
  btnPause.style.display = "inline-block";
  slider = setInterval(function() {
    nextClick();
    displayImage();
  }, 2500);
}

function pauseClick() {
  btnPlay.style.display = "inline-block";
  btnPause.style.display = "none";
  clearInterval(slider);
}

function nextClick() {
  if (position === contacts.length - 1) {
    position = 0;
  } else {
    position++;
  }
  displayImage();
}

function backClick() {
  if (position === 0) {
    position = contacts.length - 1;
  } else {
    position--;
  }
  displayImage();
}

function firstClick() {
  postion = 0;
  displayImage();
}

function lastClick() {
  position = contacts.length - 1;
  displayImage();
}
