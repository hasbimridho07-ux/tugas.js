const prompt = require('prompt-sync')();

let panjang = parseFloat(prompt("Masukkan panjang balok: "));
let lebar = parseFloat(prompt("Masukkan lebar balok: "));
let tinggi = parseFloat(prompt("Masukkan tinggi balok: "));

let volume = panjang * lebar * tinggi;
let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Balok:", volume);
console.log("Luas Permukaan Balok:", luas);