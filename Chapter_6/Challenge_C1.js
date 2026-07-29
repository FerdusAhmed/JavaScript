const num = ["a","b","a","c","a"];
let object = {};

const countBy1 = num.reduce((count, i) => (i==="a" ? count+1 : count),0);
object.a = countBy1

const countBy2 = num.reduce((count , i ) => (i === "b" ? count+1 : count),0);
object.b = countBy2

const countBy3 = num.reduce((count , i ) => (i === "c" ? count+1 : count),0);
object.c = countBy3

console.log(object);