// Spread vs Rest operators

//Spread = expand
let arr1 = [1,2,3,4,5]
let b_arr = "hello All"
console.log(...arr1) //1 2 3
console.log(...b_arr)

// rest = collect

function fun(...nums){
    return nums
}
console.log(fun(1, 2, 3))

//----------

// map method
let nums = [1,2,3,4,5]
let total = nums.map(ele =>{
    return ele*2
})
console.log(total)

Filter
let nums1 = [1,2,3,4,5]
const results = nums1.filter(ele => ele%2===0)
console.log(results)

Reduce
let nums2 = [1,2,3,4,5,6,7]
const result = nums2.reduce((a,c)=> a+c, 0)
console.log(result)

Destructuring
let obj1 = {key1:1, key2: 5, key3:10}
let {key1,key2,key3} = obj1
console.log(key1)
console.log(key2)
console.log(key3)

Closure

let rootElement = document.getElementById("root")
let arr = ["Rohan", "Arif", "Charan", "Dinesh", "Narendra"]

arr.forEach((ele, index)=>{
    let button = document.createElement("button")
    button.onclick = ()=>{
        console.log(ele)
    }
    button.textContent = index
    rootElement.appendChild(button)
})

console.log(arr.filter(ele => ele.length>3))
console.log(arr.map(ele => ele.length>3))


//Shallow copy VS Deep copy

let a = ["a","b","c"]
let b = [...a]
console.log(b)