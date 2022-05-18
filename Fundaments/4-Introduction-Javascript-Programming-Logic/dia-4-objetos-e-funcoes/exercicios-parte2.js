// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindrome(word){
  let inverse = word.split('').reverse().join("");
  if (inverse === word){
      return true;
  } else {
      return false;
  }
};
console.log(isPalindrome('ana'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function searchHighestIndex(array){
  let highestIndex = 0;
  for(let index = 0; index < array.length; index += 1){
    if(array[index] > array[highestIndex]){
      highestIndex = index;
    }
  }
  return highestIndex
}

let arrayTest = [5, 9, 50, 79, 89, 1];
console.log(searchHighestIndex(arrayTest));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function searchLowestIndex(array){
  let lowestIndex = 0;
  for(let index = 0; index < array.length; index += 1){
    if(array[index] < array[lowestIndex]){
      lowestIndex = index;
    }
  }
  return lowestIndex
}

let arrayTest = [5, 9, 50, 79, 89, 10];
console.log(searchLowestIndex(arrayTest));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function searchBiggestWord(words){
  let biggerWord = '';
  for(let word of words){
    if(word.length > biggerWord.length){
      biggerWord = word;
    }
  }
  return biggerWord
}

let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(searchBiggestWord(arrayNames));

//  5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

