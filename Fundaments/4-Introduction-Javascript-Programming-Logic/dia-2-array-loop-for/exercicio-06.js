let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let pares = []
let impares = []

for(let index = 0; index < numbers.length; index += 1){
  if((numbers[index] % 2) == 0) {
    pares.push(numbers[index]);
  } else {
    impares.push(numbers[index]);
  }
} 
console.log('numeros pares:', pares ,'numeros impares:', impares)