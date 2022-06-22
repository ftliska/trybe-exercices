// Parte 1
// Exercício 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
    console.log(ifScope)
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`
    console.log(elseScope)
  }
}
testingScope(true)

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2]

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13

  return oddsAndEvens
}
const sortedArray = sortOddsAndEvens()
console.log(sortedArray)

const compararNumeros = (a, b) => a - b

oddsAndEvens.sort(compararNumeros)
console.log(oddsAndEvens)

// Parte 2
// Exercício 1

const factorial1 = n => {
  let result = 1

  for (let i = 2; i <= n; i += 1) {
    result *= i
  }
  return result
}

console.log(factorial1(5))

const factorial = n => (n > 1 ? n * factorial(n - 1) : 1)
console.log(factorial(4))

// Parte 2
// Exercício 2

const getLongestWord = phrase => {
  let wordsArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (let biggest of wordsArray) {
    if (biggest.length > maxLength) {
      maxLength = biggest.length;
      result = biggest;
    }
  }
  return result;
}
console.log(
  getLongestWord(
    'Posso não concordar com o que você diz, mas defenderei até a morte o seu direito de dizê-lo'
  )
)

// Parte 2
// Exercício 3

const btn = document.querySelector('#btn')
const counter = document.querySelector('#counter')
counter.innerText = 0;
let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  counter.innerText = count;
})

// Parte 2
// Exercício 4

const changeX = (str) => {
  const param = 'ameno';
  let letter = '';
  for (let i = 0; i < str.length; i += 1) {
    letter = str[i];
    if (letter === 'x') {
      letter = param;
    }
  }
  console.log(letter);
  return letter;
}
changeX('xuxu xaxá');


const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));
