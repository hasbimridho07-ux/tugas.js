const prompt = require("prompt-sync")({sigint: true});
let sisi = Number(prompt("masukan sisi :"))
let panjang= sisi ^ 2
let lebar = 4 * sisi 

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log(" panjang persegipanjang : " + panjang + "cm")
console.log(" lebar persegipanjang : "+ lebar)
console.log(`
panjang persegipanjang\t\t: ${panjang.toFixed(2)} cm
lebar persegipanjang\t: ${lebar.toFixed(2)} cm
`);