/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const randomNum = () => {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

const novoSorteio = (number, func) => {
  if (number === func) {
    console.log(number, func);
    return 'Parabéns você ganhou!';
  } 
    console.log(number, func);
    return 'Tente novamente';
}

console.log(novoSorteio(1, randomNum()));



