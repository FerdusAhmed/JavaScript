const team=[{name : 'phyton', pts:10}];
const shallow = [...team];
shallow[0].pts =99;
console.log(shallow[0].pts);

const deep = structuredClone(team);
deep[0].pts = 10;
console.log(team[0].pts);