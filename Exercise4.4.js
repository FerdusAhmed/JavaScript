for(let i = 1; i<= 5 ; i++)
{
   let stars = "";
    for(let j =1; j<=5-i; j++)
    {
       
        stars += " ";
        
    }
    for(k=1; k <= (2*i-1); k++)
    {
        stars += "*";

    }
    console.log(`${stars}`);
}