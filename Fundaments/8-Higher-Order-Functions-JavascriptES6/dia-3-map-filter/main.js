function sumTwoSmallestNumbers(numbers) {
  let ordenados = numbers.sort((a, b) => a - b)
  let soma = ordenados[0] + ordenados[1]
  return soma
}

// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

/* 
Em uma fábrica, uma impressora imprime etiquetas para caixas. Para um tipo de caixa, a impressora deve usar cores que, para simplificar, são nomeadas com letras de a - m.

As cores usadas pela impressora são registradas em uma string de controle. Por exemplo, uma string de controle "boa" aaabbbbhaijjjm. Significaria que a impressora usou três vezes a cor a, quatro vezes a cor b, uma vez a cor h etc

Às vezes há problemas: falta de cores, mau funcionamento técnico e uma string de controle "ruim" é produzida, por exemplo aaaxbbbbyyhwawiwjjjwwm, com letras que não são de a - m.

Você tem que escrever uma função printer_error que dada uma string, retornará a taxa de erro da impressora como uma string representando um racional cujo numerador é o número de erros e o denominador o comprimento da string de controle. Não reduza esta fração a uma expressão mais simples.

A string tem um comprimento maior ou igual a um e contém apenas letras de a até z.

Exemplos:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

const printerError = str => {
  let array = str.match(/[n-z]/gi)
  return `${array.length}/${str.length}`
}

const printerError2 = str => {
  let count = 0;
  str.split('').forEach((word) => {
    if (word > 'm') count += 1;
  })
  return `${count}/${str.length}`
}

console.log(printerError2('abcxyzwww'))


