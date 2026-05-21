const prompt = require('prompt-sync')();

let r = parseFloat(prompt("Masukkan jari-jari bola: "));

let phi = Math.PI;

let volume = (4/3) * phi * Math.pow(r, 3);

let luas = 4 * phi * Math.pow(r, 2);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Bola = " + volume.toFixed(2));
console.log("Luas Permukaan Bola = " + luas.toFixed(2));