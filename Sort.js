const num = [30,4,200,11];
r = num.sort();
console.log(r);
fr = num.sort((a,b) => a-b);
console.log(fr);
const products = [
{name : "bag", price : 2000, isAvailable: true},
{name : "pen", price : 20, isAvailable: false},
{name : "book", price : 500, isAvailable: true},
{name : "laptop", price : 60000, isAvailable: false},

];
result1 = products.sort((a,b)=> a.price - b.price);
 console.log(result1);
result2 = products.sort((a,b)=>a.name.localeCompare(b.name));
 console.log(result2);
result3 = products.sort((a,b)=>a.isAvailable - b.isAvailable);
    console.log(result3);
