const prompt = require('prompt-sync')();

let r = parseFloat(prompt("Masukkan jari-jari: "));

let keliling = 2 * Math.PI * r;
let luas = Math.PI * r * r;

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Keliling lingkaran = " + keliling);
console.log("Luas lingkaran = " + luas);