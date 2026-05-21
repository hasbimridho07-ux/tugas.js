const prompt = require('prompt-sync')();

// Input
let a = parseFloat(prompt("Sisi atas: "));
let b = parseFloat(prompt("Sisi bawah: "));
let t = parseFloat(prompt("Tinggi: "));
let c = parseFloat(prompt("Sisi miring kiri: "));
let d = parseFloat(prompt("Sisi miring kanan: "));

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")
let luas = 0.5 * (a + b) * t;
let keliling = a + b + c + d;

console.log("Luas trapesium = " + luas);
console.log("Keliling trapesium = " + keliling);