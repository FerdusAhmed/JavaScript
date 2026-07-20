let sum1 = 0;
for (let i = 1; i<101; i++){
sum1 += i;
}
console.log(`using loop sum1 is =${sum1}`);

let n = 100;

sum2 = (n*(n+1))/2;
console.log(`using formula sum2 =${sum2}`);

if(sum1 === sum2)
{
    console.log(`both sum are equal` );

}
else{
   console.log(`both sum are not equal` ); 
}
