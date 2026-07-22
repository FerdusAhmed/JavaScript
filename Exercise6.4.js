let num = [1,2,3,4,5,6,7,9];
let evencount = num.reduce((count,item) => {
    return item % 2 === 0 ? count + 1: count

}, 0);

console.log(evencount);