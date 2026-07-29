const grid=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(grid[1][2]);
let total = 0;
for(const row of grid)
{
    for(const cell of row) total += cell
}
console.log(total);
const nested = [1, [2, 3], [4, [5]]]; 
console.log(nested.flat());
console.log(nested.flat(Infinity));

const sentences = ["I love JS", "Arrays rock"]; 
const words = sentences.flatMap((s) => s.split(" ")); 
console.log(words);