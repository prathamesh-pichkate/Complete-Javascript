const name = "Prathamesh";
const name2 = " Pichkate";

console.log(name + name2)

//String Interpolation:
console.log(`Hello i am ${name} ${name2}`)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf("e"))

const url = "http://name%20.com"
console.log(url.replace('%20' , "-"))