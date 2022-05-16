// 1. Encontre o index através do valor de um elemento Escreva um algoritmo que recebe 2 parâmetros: 
// - Um array 
// - O valor de um elemento de tipo primitivo 
// Imprima no terminal a posição index em que o elemento encontra-se. 
// Caso não o encontre, imprima:  
// "Elemento não encontrado no array" 

let array = [2, 5, 10, 20, 35, 40]
let elemento = 40
let numero = 0

  for(let index = 0; index < array.length; index += 1){
    if(array[index] == elemento){
      numero = index
  } else {
  }
}
if(numero == 0){
  console.log('Elemento não encontrado no array');
} else {
  console.log(numero);
}


// 2. Retorne os números ímpares 
// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50. Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo. 
// Use a seguinte estrutura na impressão:  "x, y, z, ...n" 

let arrayImpar = [];
let string = ''

for(let index = 1; index < 50; index += 1){
  if (index % 2 == 1){
  string = string + ', ' + index
} 
} 
console.log(string);

// 3. Números divisíveis por 3 
// 
// Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de criar o valor inicial e final. 
// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando: 
// Se houver 50 ou mais: "Há 50 ou mais números divisiveis por 3" 
// Caso o contrário: "Sequência muito pequena."