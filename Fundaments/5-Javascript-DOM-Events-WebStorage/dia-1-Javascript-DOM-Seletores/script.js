/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeParagraph() {
  let changeParagraph = document.getElementsByTagName('p')[1].innerText = '2 anos mais velho';

  return changeParagraph;
}
changeParagraph();

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor() {
  let changeColor = document.getElementById('verde').style.backgroundColor = 'rgb(76,164,109)';

  return changeColor;
}
changeColor();

// Crie uma função que mude a cor do quadrado vermelho para branco.

function changeColorWhite() {
  let changeColor = document.getElementById('branco').style.backgroundColor = 'white';

  return changeColor;
}
changeColorWhite();

