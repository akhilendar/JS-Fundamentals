//Event Bubbling & Capturing
let parent = document.getElementById("parent")
let child = document.getElementById("child")
let button = document.getElementById("button")

parent.addEventListener("click", ()=>{
    console.log("Parent Scope Triggered")
}, true)  //true -> capturing phase, false -> bubbling phase
child.addEventListener("click", ()=>{
    console.log("Child Scope Triggered")}
, true)
button.addEventListener("click", ()=>{
    console.log("Button Triggered")
}, true)


// ---------

// Debouncing & Throttling

let inputEle = document.getElementById("input")
let count = 0
let timer 
 let flag = true
const wrapper = () =>{
  
    if(flag){
        throttling()
        flag = false
        setTimeout(()=>{
            flag = true
        }, 3000)
}}

const debounce = () =>{
    console.log("Input Event ", count++)
}


const throttling = () =>{
    console.log("Input Event ", count++)
}

inputEle.addEventListener("keydown", wrapper )

//---------

//Polyfills

if(!Array.prototype.includes){
    Array.prototype.includes = function(value){
        return this.indexOf(value) !== -1
    }
}

//---------
//WeakMap & WeakSet

let weakMap = new WeakMap()
let obj1 = {}

weakMap.set(obj1, "Hello")
console.log(weakMap.get(obj1))

obj1 = null