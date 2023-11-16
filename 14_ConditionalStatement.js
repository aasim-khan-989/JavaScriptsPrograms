
// if else

const isUserLogged =true


if(isUserLogged){
    console.log('yess');
    
}

//  >, <, >=, <=, ==, ===

if(3=='3'){
    console.log('executed')
}
else{
    console.console.log('no executed');
    
}

if(3==='3'){
    console.log('executed')
}
else{
    console.log('no executed');
    
}


// Swicth case statement basic syntax


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month ="aman"

switch (month) {
    case "ama":
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case "aman":
        console.log('march');
        break;

    default:
        console.log('default case');
        break;
}


// truty and falsy value some times we dont compare a variable in this case we assume that variables are true or false according to there truthy or falsy value 

// for eg

let value = "aasim"

if(value){
    console.log(' value is considered true');
    
}
else{
    console.log(' value is considered false');
    
}
value = ""

if(value){
    console.log(' value is considered true');
    
}
else{
    console.log(' value is considered false');
    
}

value = []

if(value){
    console.log(' value is considered true');
    
}
else{
    console.log(' value is considered false');
    
}
value = {}

if(value){
    console.log(' value is considered true');
    
}
else{
    console.log(' value is considered false');
    
}

// falsy values : 0,"",-0,bigint 0n,null,undefined,Nan others all value are considered to be truethy

// note '0','false' ' ', function(){},{} this are truthy value since they are string

// nullish coalesing operator (??): null ,undefinded

// if you get some values that may be null or undefined qwe cazn use nullish colasing operaor

let val1;

val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 10
console.log(val1);

val1 = NaN ?? 10
console.log(val1);

val1 = null ?? undefined
console.log(val1);

val1 = NaN ?? undefined
console.log(val1);

// ternary operation 

let comp = 100

comp <=80 ? console.log("less than 80") : console.log("more than 80") 

comp = 10

comp <=80 ? console.log("less than 80") : console.log("more than 80")

