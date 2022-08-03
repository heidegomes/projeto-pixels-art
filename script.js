// // 4.Cria um quadro de pixels 5x5
// let classe = 'pixel';
// let grid = document.getElementById('pixel-board');

// function criaSquare(classe) {
//   let square = document.createElement('div');
//   square.className = classe;
//   return square;
// }
// function paiFilho(criafilho){
//   grid.appendChild(criafilho);
// }  
// paiFilho(criaDiv('pixel'));
  
//   for (let index of classe) {
//     let element = criaSquare(index);
//     paiFilho(element);
//   }


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

// 8. Preenche um pixel do quadro com a cor selecionada
function clicaNoPixel(evento) {
  const elemPixel = evento.target;
  const novaCorPixel = elemPreviaSelected.classList.item(1);
  console.log(novaCorPixel);
  elemPixel.className = `pixel color ${novaCorPixel}`;
  console.log(elemPixel);
}

const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', clicaNaPaleta);

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', clicaNoPixel);

// 9. retorna a cor do quadro quando clicar no botão limpar
function createClearButton(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonID = 'clear-board';
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  function clearBoard() {
// quando clicar no botão as divs com class pixel tem que voltar pra classe inicial pixel
  elemPreviaSelected.classList.remove.item(1);
  }
  newButton.addEventListener('click', clearBoard);
  buttonContainer.appendChild(newButton);
}

createClearButton('Limpar');

// function clearBoard() {
//   const getButton = document.querySelector('#clear-board');
//   console.log(getButton);
//   const board = document.getElementsByClassName('pixel');
//   // console.log(board);
//   const filled = document.getElementsByClassName('color');
//   // console.log(filled);
//   const unfilled = document.getElementById('pixel');
//   // console.log(unfilled);

// }
//   getButton.addEventListener('click', () => { // cria o escutador de eventos
//     for (let index = 0; index < board.length; index += 1) { // passa por todos os elementos pixel
//       if (board[index].classList === filled) { // verifica se o pixel possui a clas list color
//         board[index].classList = unfilled; // subtitui pela classlist pixel
//       }
//     }
//   });
// clearBoard();
