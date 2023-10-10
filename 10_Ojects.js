// Objects in JavaScript

//we can create objects by using two way  by using literal or by constructor

// By using literal

const obj = {
    name:"aasim",
    age:22,
    isLoggedIn:"yes"
}

console.log(obj)


// we can access  objects by using . or []

console.log(obj.name)
console.log(obj["name"])

// note in some case we can't use . operator for accsessing the object items

// for  example

const obj2 = {
    myName:"Aasim",
    "Sir Name":"khan",
    "age":21
}
// error console.log(obj2.Sir Name)
console.log(obj2.age)

mySymbol = Symbol("key 1")

const obj3 = {
  [mySymbol] : "abc"
}

console.log(obj3[mySymbol])
console.log(typeof(obj3[mySymbol]))
console.log(obj3)
console.log(obj3[mySymbol])


// two change the object value

obj2.age=22

console.log(obj2)

// if you want your value of objects never change use frezze

Object.freeze(obj2)

obj2.age=21

console.log(obj2)

// you can also assign a function in object

let newObject = {
    a : "welcome",
    myFunc : function(){
        console.log("hi")
    },
    myFunc2 : function(){
        console.log(`this is func2 ${this.a}`)
    }
}
console.log(newObject)
console.log(newObject.myFunc()) 
console.log(newObject.myFunc2()) 

// declaring objects by constructor method

const newObj1 = new Object();
newObj1.id="abc123"
newObj1.name="xyz"
newObj1.func=function(){
    console.log("hi!!!");
}
console.log(newObj1.func());

// merging two objects


const m1 = {
    1:"a",
    2:"b"
}
const m2 = {
    3:"a",
    4:"b"
}

// const m3 = Object.assign(m1,m2)
// console.log(m3)

// or you can use

const m3 = {...m1,...m2}

console.log(m3)

// also we can create arra of objects

const objarr = [
    {
        email:"xyz",
        name:"abc"
    },
    {
        email2:"xyz",
        name2:"abc"
    }
]

console.log(objarr[0])

// how to obtain key and value of objects

const keyObj ={
    1:"a",
    2:"b"
}
console.log(Object.keys(keyObj))  //return array of keys
console.log(Object.values(keyObj)) //return array of values
console.log(Object.entries(keyObj))//return array of arrays of key value pair

// how to check a property

console.log(keyObj.hasOwnProperty(1)) // return a boolean

// object destructuring


const course ={
    courseName:"Js in hindi",
    price:"free",
    courseInstructor:"Aasim"
}

// error
// console.log(courseInstructor) 

const {courseInstructor} = course

console.log(courseInstructor)

// also you can

const {courseName : name} = course

console.log(name)

