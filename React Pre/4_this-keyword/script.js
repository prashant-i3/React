console.log(this) //windows

function fn(){
    console.log(this)  //windows
}
fn()

let obj = {
    name : 'Prashant',
    func : fn
}

obj.func() // Self obj