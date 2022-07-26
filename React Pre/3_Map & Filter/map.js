let arr = [1, 2, 3, 4, 5]

let arr2 = []

arr2 = arr.map((value, idx)=>{
    // console.log(value, idx)
    return value*2
})

console.log(arr)
console.log(arr2)