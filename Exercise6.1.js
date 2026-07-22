let array = [3,7,2,9,4];
let largevalue = array[0];
for(let i = 1; i < array.length - 1; i++)
{
    if(array[i]>largevalue)
    {
        largevalue = array[i];
    }
}
console.log(largevalue);