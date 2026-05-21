const prompt = require('prompt-sync')();

let alas = parseFloat(prompt("masukan alas jajargenjang = "));
let tinggi = parseFloat(prompt("masukan tinggi jajargenjang = "));
let sisimiring = parseFloat(prompt("masukan sisimiring jajar genjang = "));

let luas = alas * tinggi;
let keliling = 2 * (alas + sisimiring);

console.log("========================")
console.log("         H A S I L      ")
console.log("------------------------")

console.log("luas jajargenjang = " + luas)
console.log("keliling jajargenjang = " + keliling)