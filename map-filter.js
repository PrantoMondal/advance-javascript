const numbers = [1,2,3,4,5,6,7,8,9];
 const output = [];
 for (let i = 0; i < numbers.length; i++) {
     const element = numbers[i];

     const result = element * element;
    output.push(result);
    
 }
 function square(element) {
     return element * element
 }
 const result = numbers.map(function(element, index, array){
    return element * element
 })

const result = numbers.map(x => x*x)

 const result = numbers.filter(x => x>5)
 console.log(result);

const isThere = numbers.find(x => x>5)

console.log(isThere);