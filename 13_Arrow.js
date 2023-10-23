
const obj1 ={
    user:"aasim",
    score:88,
    func:function(){
        console.log(this.user,this.score);
    }

}

// obj1.func()

const obj2 ={
    user:"aasim",
    score:88,
    func:function(){
        hi()
        function hi(){
            console.log(this.user,this.score);
        } 
    }

}
// obj2.func() // it will give undefined as o/p 


// for overcomming this problem earlier we use a trick


const obj3 ={
    user:"aasim",
    score:88,
    func:function(){
      
        console.log(this);
        let that =this
        hi()
        function hi(){
            
            console.log(that.user,that.score);
        } 
    }

}
// obj3.func() 


// for creating the task easier arrow functions are used 

// note arrow function takes this from its lexical parent

// arrow function declaration

const demo = () =>{
    console.log(this)
}

demo()

// +++++++++++++++++++ important ++++++++++++++++++++++++++


const obj4 ={
    user:"aasim",
    score:88,
    func:function(){
        const func2 =()=>{       
            console.log(this.user,this.score);
        }
        func2()
    }

}

// obj4.func()

// implict and explict arrow function

const add = (num1,num2)=>{
    return num1+num2
}

// we have to write return explictily

const addTwo = (num1,num2)=>(num1+num2+2)

console.log((addTwo(2,3)));


// returning an object 


const addobj = ()=>({a:"aasim"})

console.log(addobj());


