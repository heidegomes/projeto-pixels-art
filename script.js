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
function clearBoard() {
  const elements = pixelBoard.getElementsByClassName('pixel');
  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    element.className = 'pixel';
  }
}
function createClearButton(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonID = 'clear-board';
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  newButton.addEventListener('click', clearBoard);
  buttonContainer.appendChild(newButton);
}

createClearButton('Limpar');
