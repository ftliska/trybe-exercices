//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let title = document.createElement('h1')
title.innerText = 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(title)

//Adicione a tag main com a classe main-content como filho da tag body;
let m = document.createElement('main')
m.className = 'main-content'
document.body.appendChild(m)

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sec = document.createElement('section')
sec.className = 'center-content'
m.appendChild(sec);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerText = 'Algum texto';
sec.appendChild(paragraph);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let secLeft = document.createElement('section');
secLeft.className = 'left-content';
m.appendChild(secLeft);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let secRig = document.createElement('section');
secRig.className = 'right-content';
m.appendChild(secRig);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
secLeft.appendChild(image);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = document.createElement('ul');
secRig.appendChild(list);
let arrayString = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 
'dez'];
for (let index = 0; index < arrayString.length; index += 1) {
  let itemList = document.createElement('li');
  itemList.innerText = arrayString[index];
  list.appendChild(itemList);
}

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 0; index < 3; index += 1) {
  let subTitle = document.createElement('h3');
  m.appendChild(subTitle);
}
