let obj = {
    name : 'Prashant',
    add : {
        country : 'India',
        state : {
            code : 'UP',
            pin : 230135
        }
    }
}

let {name} = obj

let {add:{country:abcd}} = obj

let {add:{state:{code:cd}}} = obj

console.log(cd)