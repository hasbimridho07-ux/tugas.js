const prompt = require('prompt-sync')();
let d1 = parseFloat(prompt("Diagonal 1: "));
let d2 = parseFloat(prompt("Diagonal 2: "));
let sisi = parseFloat(prompt("Panjang sisi: "));

// Perhitungan
let luas = 0.5 * d1 * d2;
let keliling = 4 * sisi;

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

// Output
console.log("Luas belah ketupat = " + luas);
console.log("Keliling belah ketupat = " + keliling);