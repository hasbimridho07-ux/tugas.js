const prompt = require('prompt-sync')();

let alas = parseFloat(prompt("Masukkan alas segitiga: "));
let tinggiSegitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));
let sisiMiring1 = parseFloat(prompt("Masukkan sisi miring 1: "));
let sisiMiring2 = parseFloat(prompt("Masukkan sisi miring 2: "));
let tinggiPrisma = parseFloat(prompt("Masukkan tinggi prisma: "));

let luasAlas = 0.5 * alas * tinggiSegitiga;

let kelilingAlas = alas + sisiMiring1 + sisiMiring2;

let volume = luasAlas * tinggiPrisma;

let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Prisma Segitiga:", volume);
console.log("Luas Permukaan Prisma Segitiga:", luasPermukaan);