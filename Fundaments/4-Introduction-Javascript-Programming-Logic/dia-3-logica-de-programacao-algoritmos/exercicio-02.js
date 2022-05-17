let num = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let fatorial = 1

for(let index = 0; index < num.length; index += 1){
  fatorial = fatorial * num[index]
}
console.log(fatorial);