console.log(typeof(2));
console.log(typeof(true));
console.log(typeof('Aladár'));
console.log(typeof ({name: 'Béla', age: 42}));
console.log(typeof(function f(a, b) {return a + b}));
console.log(typeof(nonexisting));

let a = 0.1 + 0.2
console.log(a)
console.log(a.toFixed(2))
console.log(typeof(a.toFixed(2)))

let firstName = 'John' 
let LastName = 'Johnson'

console.log(' Hello ' + firstName  + ' ' + LastName)
console.log(`Hello ${firstName} ${LastName}`)

let kocka = "apu"

let has = "test"

//Boolean

console.log('BOOLEAN')
console.log(typeof true)
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("a"))

let person = {
    name: "Kalo Bone",
    age: 39,
    isStudent: false
}

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address);

let xy;
console.log(xy);
console.log(typeof xy);