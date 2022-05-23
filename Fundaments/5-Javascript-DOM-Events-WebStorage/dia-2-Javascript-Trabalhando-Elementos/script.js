//Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Adicione um texto aqui';

//Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling

//Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').lastElementChild.previousElementSibling;

//Crie um irmão para elementoOndeVoceEsta.
let div = document.createElement('div');
let pai = document.getElementById('pai');

pai.appendChild(div);
