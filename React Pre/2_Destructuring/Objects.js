let obj = {
    name : 'Prashant',
    state : 'UP',
    country : 'India'
}

// let name = obj.name
// let state = obj['state']

// let {name,state,country, extra='default'} = obj 
let {name:first,state,country, extra='default'} = obj 

console.log(first, state, country, extra )