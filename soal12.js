const prompt = require('prompt-sync')();

let sisi = parseFloat(prompt("Masukkan sisi alas: "));
let tinggi = parseFloat(prompt("Masukkan tinggi limas: "));
let tinggiSisi = parseFloat(prompt("Masukkan tinggi sisi (apotema): "));

let luasAlas = sisi * sisi;

let keliling = 4 * sisi;

let volume = (1/3) * luasAlas * tinggi;

let luasSisiTegak = 0.5 * keliling * tinggiSisi;

let luasPermukaan = luasAlas + luasSisiTegak;

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Limas:", volume);
console.log("Luas Permukaan Limas:", luasPermukaan);