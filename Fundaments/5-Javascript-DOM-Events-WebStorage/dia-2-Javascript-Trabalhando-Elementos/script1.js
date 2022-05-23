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

