// We are aware of simple comparison like ==,<,>,>=,<=

console.log(null > 0);  //false
console.log(null >= 0); //true
console.log(null == 0) //false

console.log(undefined > 0); //false
console.log(undefined >= 0); //false
console.log(undefined == 0); //false

//Differecnce in "==" & "==="
console.log("2" == 2) //it onlu check the value
console.log("2" === 2) //it strictly checks the datatype and and value