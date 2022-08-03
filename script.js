window.onload;
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
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'clear-board';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createClearButton('Limpar');

function clearBoard() {
  let getButton = document.querySelector('#clear-board');
  console.log(getButton);
  let board = document.getElementsByClassName('pixel');
  console.log(board);
  let filled = document.getElementsByClassName('color');
  console.log(filled);
  let unfilled = document.getElementById('pixel');
  console.log(unfilled);

  getButton.addEventListener('click', () => { // cria o escutador de eventos
    for (let index = 0; index < board.length; index += 1) {
      if (board[index].classList === filled) {
        board[index].classList = unfilled;
      }
    }
  });
}

clearBoard();