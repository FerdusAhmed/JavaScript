const input = require("fs").readFileSync(0, "utf8");
const lines = input.split("\n");
let at = 0;
const next = () => lines[at++];
const nextInt = () => Number(next());
const out = [];

// your code: read with next() and nextInt(), push every line of output to out
// Lines variant: next() returns the next whole line, empty lines included.
const title = next();
const author = next();
out.push("Title: " + title);
out.push("By: " + author);
out.push("Characters in the title: " + title.length);

console.log(out.join("\n"));
