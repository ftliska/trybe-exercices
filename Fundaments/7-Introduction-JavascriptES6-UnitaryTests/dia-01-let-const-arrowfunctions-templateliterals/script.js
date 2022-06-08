// Parte 1
// Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}
testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  
  return oddsAndEvens
}
const sortedArray = sortOddsAndEvens();
console.log(sortedArray);

const compararNumeros = (a, b) => a - b;

oddsAndEvens.sort(compararNumeros);
console.log(oddsAndEvens);

// Parte 2
// Exercício 1

const factorial1 = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

console.log(factorial1(5));

const factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(4));

