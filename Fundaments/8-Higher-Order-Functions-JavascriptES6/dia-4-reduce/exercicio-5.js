// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparece a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arr) => {
  const numberA = arr.reduce((acc, word) => acc + word.split('').reduce((acum, letra) => {
      if (letra === 'a' || letra === 'A') {
        return acum + 1;
      }
      return acum;
    }, 0), 0);
  return numberA
}

console.log(containsA(names)); ;