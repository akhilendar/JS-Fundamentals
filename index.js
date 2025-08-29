//1. Execute a JS file in 3 different ways
//2. undefined VS null
//3. Scoping
//4. Hoisting
//5. Let var & const
//6. This keyword
//7. Functions and types

let a;
console.log(a)

let b = null
console.log(b)

//----------------

// let var & const

// ------------

//Hoisting
console.log(add(2,50))

function add(a,b){
    return a+b
}

console.log(var1)
console.log(var2)
console.log(var3)
let var1 = 5;
const var2 = 10;
var var3 = 20

//-----------

const globalvariable = "Global"
greeting();
function greeting(){
    var funVariable = "functional"
    console.log(globalvariable)  //Global
    console.log(funVariable) //functional
   
    if(true){
        const blockVariable = "block"
        console.log(globalvariable)  //Global
        console.log(funVariable) //functional
        console.log(blockVariable) //block
    }
   //block
}
console.log(globalvariable)  //Global
 console.log(funVariable)

//------------------

const obj1 = {
    name: "akhil",
    normal: function(){
        console.log(this.name)
    },
    arrow: () =>{
        console.log(this.name)
    }
}

obj1.normal() //akhil
obj1.arrow()  //

// --------

// 1. Function Declaration

function niat(a,b){
    return "Hello from NIAT"
}

// 2. Function expression

let niat1 = function(a,b){
    return
}

// 3. Arrow function

let arrFun = a => "Hello"

//4. HOF

const add = (fun, x, y) =>{
    return fun(x,y)
}

console.log(add((x,y)=>x+y, 2, 3))

//---------
// 5. Pure function

const fun = (x,y) =>{
    return x+y
}