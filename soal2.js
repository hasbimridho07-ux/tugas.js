const prompt = require('prompt-sync')();

let alas = parseFloat(prompt("Masukkan alas: "));
let tinggi = parseFloat(prompt("Masukkan tinggi: "));
let luas = 0.5 * alas * tinggi;

let a = parseFloat(prompt("Sisi a: "));
let b = parseFloat(prompt("Sisi b: "));
let c = parseFloat(prompt("Sisi c: "));
let keliling = a + b + c;

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Luas segitiga = " + luas);
console.log("Keliling segitiga = " + keliling);