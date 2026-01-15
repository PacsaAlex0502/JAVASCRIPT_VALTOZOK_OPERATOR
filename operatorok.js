console.log(5 == "5");
console.log(typeof (5))
console.log(typeof("5"))

console.log(5 === "5")

//logikai operátorok 
console.log("Logikai Operátorok")
let szam = 6 
console.log(szam > 5 && szam < 10) //true
console.log(szam === 5 || szam === 6)

let z;
z = 3+4;
z = 3-4;
z = 2*3;
z = 2/3;
z = 3%2;

console.log(z)
let x,y;
x = 5;
y = ++x;
console.log(`x=${x}, y=${y}`);


// FELTÉTELES (TERNARY) OPERÁTOR
let b = 1
let c = 10
let d = 20
let a = b > 2 ? c : d
console.log('a=' +a)

function myFunction() {
    let valtozo = 5
    let valtozo2 = 10
    let valtozo3 = 15
    return valtozo
}

console.log(myFunction())
