//Currying

function fun1(a) {
    return function(b) {
        return function(c) {
            return a+b+c
        }
    }
}

console.log(fun1(5)(6)(7))  //parameter

//-----------

// Call, Apply, & Bind

let bankEmployee = {
    name : "Akhil",
    money : 50000,
    checkBalance : function(message){
        console.log(message)
        console.log(this.name + "-" + this.money)
    }
}

let user = {
    name: "Ravi",
    money: 40000
}

bankEmployee.checkBalance.call(user, "Hello")
bankEmployee.checkBalance.apply(user, ["Hi Everyone"])
bankEmployee.checkBalance.bind(user, "Good Morning")()

// -------------
// /TyPe Coercion
console.log("5" + 5)  //num -> string 55
console.log("5" - 5)  // string -> number
console.log(true +1)  //boolean -> number

// ----

// Promises
let var1 = new Promise((req, res)=>{
    setTimeout(()=>{
        res("Done")
    }, 1000)
})

var1.then(console.log)

// async and await

const url = "https://dummyjson.com/products"

const fun1 = async () => {
    try{
        const response = await fetch(url)
        console.log(response)
    }catch(err){
        console.log(err.message)
    }
}
fun1()

//-----

//Event Loop
// 1. Call stack -> Functions
// 2. Microtask queue -> Promises
// 3. Macrotask queue -> setTimeout

console.log("NIAT");
setTimeout(()=>{console.log("hyderabad")}, 0);
Promise.resolve().then(()=>console.log("ABC"));
console.log("End");