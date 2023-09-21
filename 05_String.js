//Two ways of declaring string

const str1 = "aasim";
// console.log(str1)

const str2 = new String("aasim");
// console.log(str2)

// two ways for string contation

// console.log(str1+str2)
// console.log(`Hi my name is ${str1}`)

console.log(str1[0])
// console.log(str1.__proto__)



// Important methods of String

console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.charAt(2))
console.log(str1.indexOf('i'))


// some advance method


const newStr = "  Khan-Mohammad-Aasim &&2  "
// console.log(newStr.length)

// const newStr2 = newStr.substring(-1,5) 
// console.log(newStr2)

// const newStr3 = newStr.slice(-18,5)
// console.log(newStr3)  ** slice**

console.log(newStr.trim())
console.log(newStr.replace("&&","%%"))
console.log(newStr.includes("%%"))
console.log(newStr.split("-"))





