
console.log(Math)

console.log(Math.abs(-5))
console.log(Math.round(4.456))
console.log(Math.sqrt(4.5678))
console.log(Math.pow(4.5678,7))
console.log(Math.ceil(4.5678))
console.log(Math.floor(4.5678))
console.log(Math.min(4,7,6,77))
console.log(Math.max(4,7,6,77))

// how to create random values 

console.log(Math.random())  // value lie from zero to one 

// in a fixed range

let maxR = 30
let minR = 10

let r = Math.floor(Math.random()*(maxR-minR+1))+minR

console.log(r)


