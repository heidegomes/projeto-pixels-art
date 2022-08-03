// 7. A cor clicada é selecionada

let elemPreviaSelected = document.querySelector('.selected');
const startedPreviaSelected = document.querySelector('.selected');
console.log(startedPreviaSelected);

function clicaNaPaleta(evento) {
  console.log(elemPreviaSelected);
  console.log(evento.target);
  const elemCorClicada = evento.target;
  const elemSelected = document.querySelector('.selected');
  elemSelected.classList.remove('selected');
  elemCorClicada.classList.add('selected');
  elemPreviaSelected = elemCorClicada;
}

function clicaNoPixel(evento) {
  const elemPixel = evento.target;
  const novaCorPixel = elemPreviaSelected.classList.item(1);
  console.log(novaCorPixel);
  elemPixel.className = `pixel color ${novaCorPixel}`;
  console.log(elemPixel);
}

const paleta = document.querySelector('#collor-palette');
paleta.addEventListener('click', clicaNaPaleta);

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', clicaNoPixel);


// const color = document.querySelector('.color')[0];
// const color= document.querySelector('.color')[1];
// const color1 = document.querySelector('.color')[2];
// const color1 = document.querySelector('.color')[3];
// let colorSelected = color black;

// color1.addEventListener('click', function () {
//   colorSelected = 'color1';
// });

// color2.addEventListener('click', function () {
//   colorSelected = 'color2';
// });

// color3.addEventListener('click', function () {
//   colorSelected = 'color3';
// });

// color4.addEventListener('click', function () {
//   colorSelected = 'color4';
// });

// function clicaNoPixel(evento) {
//   const pixelClicado = evento.target.className;
//   const pixel = document.getElementById('pixel-board');
//   corFavorita.className = corClicada;

//   console.log(evento.target.className);
// }

// const quadroPixel= document.querySelector('pixel-board');
// const pixel = document.querySelector('.pixel');
// pixel.addEventListener('click', function () {
// pixel.className = 'colorSelected';
// })
