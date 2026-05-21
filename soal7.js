const prompt = require('prompt-sync')();

let d1 = parseFloat(prompt("Diagonal 1: "));
let d2 = parseFloat(prompt("Diagonal 2: "));
let a = parseFloat(prompt("Sisi a: "));
let b = parseFloat(prompt("Sisi b: "));

let luas = 0.5 * d1 * d2;
let keliling = 2 * (a + b);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Luas layang-layang = " + luas);
console.log("Keliling layang-layang = " + keliling);