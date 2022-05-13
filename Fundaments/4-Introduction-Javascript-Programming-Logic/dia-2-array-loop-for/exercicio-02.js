// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let = index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index]);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0
let media = 0

// for(let index = 0; index < numbers.length; index += 1){
//   sum += numbers[index]
//   media = sum / numbers.length
// }
// console.log(media);

for(let index = 0; index < numbers.length; index += 1){
  sum += numbers[index]
  media = sum / numbers.length
} 
if(media > 20){
  console.log('valor maior que 20');
} else{
  console.log('valor menor ou igual a 20');
}

