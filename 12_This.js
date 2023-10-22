 // this keyword refer to current context

 const obj1={
    user:"aasim",
    print:function(){

        console.log(this.user) // without this it will give error

    }

 }

 obj1.print()

 const obj2={
    user:"aasim",
    print:function(user){

        console.log(user) // without this it will give error

    }

 }

 obj2.print(obj2.user) //o/p 

 const obj3={
    user:"aasim",
    print:function(){

        console.log(this.user) // without this it will give error
        console.log(this)

    }

 }
obj3.print()
obj3.user ="sam"
obj3.print() //o/p 

console.log(this)



// function check(){
//     console.log(this);
    
// }
// check()

function check2(){
    const user ="xyx"
    console.log(this.user);
    
}
check2() // o/p is undefined

const isUser = "yes"
function check3(){
    console.log(this.isUser); //op undefined
    
}
check3() // o/p is undefined


// this does not work on function which are not in object

