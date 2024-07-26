
//Primitive data type:
//nums
//bigint
//string
//boolean
//null
//undefined
//symbol


//reference or non-primitve
// Arrays,objects,function


//null -> is an object
//undefined -> undefined

console.log(typeof"name")


//All the primitve data types goes inside the "Stack" and  all the non-primitive goes inside the "Heap"

//In stack the copy of primitve can be changed:
let name = "Prathamesh"
let changeName = name

changeName = "Pichkate"
console.log(name)  //Prathamesh
console.log(changeName) // pichkate

//In heap in provide the refrence:
let obj = {
    newName:"qwert",
    email:"qw@gmail.com"
}

let newObj = obj
newObj.email = "pratha@gmail.com"
console.log(obj.email) //pratha@gmail.com
console.log(newObj.email)  //pratha@gmail.com