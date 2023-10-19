// function:It is a block of code that gets executed whenever it is called

function print(name){
    console.log(name)
    return name // value of the function
}

print  // refrence name of function
print() // call of the function >>it will print undefined
print("aasim") // calling the function with a parameter

// some important cases

function demoFunc(){
    console.log("xyz ")
}

demoFunc("arg");  // it will not give an error


function demoFunc2(num1,num2){
    console.log(num1-num2)
}


demoFunc2("a","2");  // it will not give an NaN as an op

function demoFunc3(num1,num2){
    console.log(num1+num2)
}

demoFunc3("arg",2);  

const res = demoFunc3("arg",2)

console.log(demoFunc3("arg",2)) // undefined

// variable length argument


function demoFunc4(...num1){

    return num1;

}

console.log(demoFunc4(10,20,30,40,50,60))

function demoFunc5(num0,...num1){
     
    console.log(num0,num1)
}
demoFunc5(20,30,40,50,60)

// passing object as an argument

const user ={
    name:"aasim",
    prn :1004
}

function handleObject(obj){
    console.log(obj)
}
handleObject(user)

function handleArr(demoarr){
    console.log(demoarr)
}
arr=[1,2,3]
handleArr(arr)