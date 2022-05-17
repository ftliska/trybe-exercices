/* Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
n = 5

*****
*****
*****
*****
*****
*/

function quadrado(n) {

  for (let index = 0; index < n; index += 1){
    let armazenamento = ''
    for(let index2 = 0; index2 < n; index2 += 1){
      armazenamento += '*'
    }
  
    console.log(armazenamento);
  }
}
quadrado(5)

/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

n = 5

*
**
***
****
*****

*/

function triangulo(n){
  let armazenamento = ''
  for(let index = 0; index < n; index += 1){
    armazenamento += '*'
    console.log(armazenamento);
  }
}
triangulo(5)


/*  Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****

*/


function invertido(n) {
  for (let i = 0; i < n; i += 1){ 
    let triangulo = ''; 
    for (let j = 1; j < n - i; j += 1) {
        triangulo += ' ';
    }
    for (let j = 0; j < i + 1; j += 1){
        triangulo += '*';
    }
    console.log(triangulo);
}
}
invertido(5)

/* Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****
*/

function base(n){
  let result = ''
  for (let i = 1; i <= n; i += 1){
    for (let i2 = n; i2 > i; i2 -= 1){
      result += ' '
    }
    for(let i2 = 1; i2 <= i; i2 += 1){
      result += '*' + ' '
    }
    result += '\n'
  }
  console.log(result);
}
base(5)