let obj = {
    name: 'Prashant',
    add: {
        country: 'India',
        state:{
            code: 'UP',
            pin: '230135'
        }
    }
}

// let obj2 = {...obj}; //Shallow Copy
// obj2.name = 'abcd'

// let obj2 = {...obj, add:{...obj.add, state:{...obj.add.state}}}; //Deep Copy
// obj2.add.state.code =10

// console.log(obj)
// console.log(obj2)

// Shortcut
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.state.code =10

console.log(obj)
console.log(obj2)