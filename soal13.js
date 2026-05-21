const prompt = require('prompt-sync')();

let jariJari = parseFloat(prompt("Masukkan jari-jari tabung: "));
let tinggi = parseFloat(prompt("Masukkan tinggi tabung: "));

let phi = Math.PI;

let volume = phi * jariJari * jariJari * tinggi;

let luasPermukaan = 2 * phi * jariJari * (jariJari + tinggi);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Tabung:", volume);
console.log("Luas Permukaan Tabung:", luasPermukaan);