/* 1- Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
Essa função deve receber dois parâmetros:
base e altura e retornar um objeto no formato:

    area: 0, 
    perimetro: 0 

Fórmulas:
area = base * altura
perimetro = (2 * base) + (2 * altura) */

function areaPerimetroQuadrado(base, altura){
  let area = base * altura
  let perimetro = (2 * base) + (2 * altura)

  return resultado = {
    area: area,
    perimetro: perimetro,
  }
}
console.log(areaPerimetroQuadrado(3, 5));

/*
2. Crie uma função que, dado um array de números inteiros,
retorne a quantidade de números pares e ímpares no formato de objeto:

    pares: 0, 
    ímpares: 0 

*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function countingEvenOdd(array){
  let odd = 0
  let even = 0
  for(let index = 0; index < array.length; index += 1){
    if(array[index] % 2 === 0){
      even += 1
    } else {
      odd += 1
    }
  }
  let resultado = {
    pares: even,
    impares: odd,
  }
  return resultado
}


console.log(countingEvenOdd(array));

/* 3. Crie uma função que receba uma string word e outra string ending.
 Considere que a string ending sempre será menor que a string word.*/

  // valor de teste: 'trybe' e 'be'
  // valor esperado no retorno da função: true
  
// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
/*verificaFimPalavra('trybe', 'be');*/  
// Retorno esperado: true  
/*verificaFimPalavra('joaofernando', 'fernan');*/  
//  Retorno esperado: false; 