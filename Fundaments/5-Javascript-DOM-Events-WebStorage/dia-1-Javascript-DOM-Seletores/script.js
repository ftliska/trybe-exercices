/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        */

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeParagraph(text) {
  let changeParagraph = document.getElementsByTagName('p')[1].innerText = text;

  return changeParagraph;
}
changeParagraph('2 anos mais velho');

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor(color) {
  let changeColor = document.getElementById('verde').style.backgroundColor = color;

  return changeColor;
}
changeColor('rgb(76,164,109)');

// Crie uma função que mude a cor do quadrado vermelho para branco.

function changeColorWhite(color) {
  let changeColor = document.getElementById('branco').style.backgroundColor = color;

  return changeColor;
}
changeColorWhite('white');

// Crie uma função que corrija o texto da tag <h1>.

function titleCorrection(text) {
  let titleChange = document.getElementsByTagName('h1')[0].innerText = text;

  return titleChange;
}
titleCorrection('Exercício 5.1 - Javascript');

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function toUpperCaseParagraph() {
  let upperCasePar = document.getElementsByClassName('center-content')[0];
  upperCasePar.innerHTML = upperCasePar.innerHTML.toUpperCase();

  return upperCasePar;
}
toUpperCaseParagraph();

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showAllTagsP() {
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerText);
  }
}
showAllTagsP();








