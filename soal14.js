const prompt = require('prompt-sync')();

let jariJari = parseFloat(prompt("Masukkan jari-jari kerucut: "));
let tinggi = parseFloat(prompt("Masukkan tinggi kerucut: "));

let phi = Math.PI;

let s = Math.sqrt((jariJari * jariJari) + (tinggi * tinggi));

let volume = (1/3) * phi * jariJari * jariJari * tinggi;

let luasPermukaan = phi * jariJari * (jariJari + s);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Kerucut:", volume);
console.log("Luas Permukaan Kerucut:", luasPermukaan);