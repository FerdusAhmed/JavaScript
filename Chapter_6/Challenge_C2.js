const marks = [[ 90,70,65],[66,80,70],];
const avarage = marks.map(
    (row) => row.reduce((s,m) => s+m, 0)/row.length
);
console.log(avarage);