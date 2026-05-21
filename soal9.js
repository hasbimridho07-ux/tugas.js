const prompt = require('prompt-sync')();

let sisi = parseFloat(prompt("masukan sisi: "));

let luas = 6 * sisi * sisi ;
let volume = sisi * sisi * sisi ;

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("Volume Kubus:", volume);
console.log("Luas Permukaan Kubus:", luas);