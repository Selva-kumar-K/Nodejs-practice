import  { name, loc }  from './md.mjs'

const arr = ['apple', 'banana','orange','grapes']

const ans = arr.map((fruits) => fruits)


const list = ['audi','bmw','ferrari']

const [bmw, , ferrari] = list

function calculate(a,b){

    const add = a + b
    const subtract = a - b
    const mutltiply = a * b
    const divide = a / b
     
    return [add, subtract, mutltiply, divide]
 
}

const [add, subtract , mutltiply, divide ] = calculate(5, 5)

console.log(add)
console.log(subtract)
console.log(mutltiply)
console.log(divide)



const Person = {
    name : 'selva',
    dep : 'IAG',
    loc : 'CBE',
    address : {
        state : 'tn',
        area : 'tvs nagar',
        pincode : 641025
    }
}

console.log(findout(Person))

function findout({name, dep, address : {area}}) {

    return 'Employee : ' + name + ' is working in a department ' + dep + ' and house located in ' + area 
}

const firstArr = [1,2,3,4,5,6,7,8]
console.log(firstArr[0])

const [firstThree, secondThree, ...rest] =firstArr
console.log(firstThree);
// console.log(message());
console.log(name,loc);