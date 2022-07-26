let arr = ['apple', 'banana', 'orange', 'watermelon']

let newArr = []

// for(let i=0; i<arr.length; i++){
//     let fruit = arr[i]
//     if(fruit.length > 6){
//         newArr.push(fruit)
//     }
// }



// Now lets see 'filter()'
newArr = arr.filter(function(fruit){
    return fruit.length>6
})



console.log(arr)
console.log(newArr)