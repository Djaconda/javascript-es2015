let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log(typeof symbol);
console.log(symbol, symbol2);
console.log(symbol === symbol2);

let symbol3 = Symbol.for('name');
let symbol4 = Symbol.for('name');
console.log(symbol3 === symbol4);

let name = Symbol.keyFor(symbol4);
console.log(name);

let object = {
    iterator: 0,
    [Symbol.iterator]() {
    }
};

console.log(object);
console.log(Object.keys(object));
console.log(Object.getOwnPropertyNames(object));
console.log(Object.getOwnPropertySymbols(object));