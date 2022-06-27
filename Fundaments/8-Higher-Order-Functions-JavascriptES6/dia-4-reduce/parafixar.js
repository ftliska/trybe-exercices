const numbers = [50, 85, -30, 3, 15]

const getBiggerNum = arr => {
  let biggerNum = 0
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] > biggerNum ? (biggerNum = arr[index]) : biggerNum
  }
  return biggerNum
}
// console.log(getBiggerNum(numbers))

const getBigger = (bigger, number) => (bigger > number ? bigger : number)

const bigger = numbers.reduce(getBigger, 0)
// console.log(bigger);

// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const evenNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54]

// Usando for tradicional:

const getSumOddNum = arr => {
  let sum = 0
  for (let index = 0; index < arr.length; index += 1) {
    arr[index] % 2 === 0 ? (sum += arr[index]) : sum
  }
  return sum
}

// console.log(getSumOddNum(evenNumbers));

// Usando método reduce().

const sumOddsNumbers = arr =>
  arr.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0)

// console.log(sumOddsNumbers(evenNumbers));

// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 }
    ]
  }
]

// const getBestResult = (arr) => {
//   return arr.map((obj) => {
//     return obj.materias.nota.sort((a, b) => a - b);
//   });
// }

const getBestResult = (arr) => {
  return arr.map((student) => ({
    name: student.nome,
    materia: student.materias.reduce((acc, materia) =>
      acc.nota > materia.nota ? acc : materia
    ).name
  }));
};

console.log(getBestResult(estudantes));
