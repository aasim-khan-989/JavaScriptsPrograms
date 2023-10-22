let a = 10
const b = 20
var c =30

a =30
// b=50 error
if(true){

    let a = 100
    const b = 200
    var c =300
}

console.log(a)
console.log(b)
console.log(c)

// Note when you declare a variable using var it can be changed in any scope

const num = 10



function print(input){
   let num = 0
   num=num+2
    console.log(num)
}
print(2)

// ++++++ important +++++ //
console.log(add1(44))

function add1(input){
    return input+1

}

console.log(add2(44)) // it will give an error
const myVal = function add2(input){
    return input+2

}



