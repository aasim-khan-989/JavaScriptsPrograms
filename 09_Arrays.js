// ways to define Array

const arr = new Array(1,2,3,4)
const arr2 = [10,"aa","aaaa",'b',]
console.log(typeof(arr),typeof(arr2))
console.log(arr,arr2)

// Methods of Arrays

//1 push pop

const score = [10,20,30]
score.push(40)
console.log(score)
score.pop()
console.log(score)

//2 shipt unshift

const subject =["English","Maths","Science","Java"]
subject.unshift("JavaScript")
console.log(subject)
subject.shift()
console.log(subject)

//3 includes , indexOf

const newArr = [11,22,33,44,55]
console.log(newArr.includes(33))
console.log(newArr.includes(333))
console.log(newArr.indexOf(-11))

const newArr2 = newArr.join()
console.log(typeof(newArr))
console.log(typeof(newArr2))

//4  slice and spice

let myNewArray = ["aasim","khan","1909@xyz"]
//note it does not change orginal array and exclued last index of the range
console.log(`my array value is ${myNewArray.slice(0,2)}`)
//note it does  change orginal array and remove the element also include last index of the range
let myNewArray2 = myNewArray.splice(0,3)
console.log(`my array value is ${myNewArray}`)
console.log(`my array value is ${myNewArray2}`)


// concat and spread  and flat method

const lis = [1,2,3]
const lis2 =[4,5,6]

const lis3 = [...lis,...lis2]
console.log(lis3)
lis3.push(lis,lis2)
const lis4 = lis3.flat(Infinity)
console.log(lis4)

//Array.is, Array.from, Array.of

console.log(Array.isArray(lis3))
console.log(Array.from("aasim")) // convert string to array

const m1=10
const m2=true
const m3="sds"
console.log(Array.of(m1,m2,m3))
