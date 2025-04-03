const name='john'
const age=30

const heloo=`my name is ${name}  and age is ${age} `
console.log(heloo)
console.log(name.split('h'))
console.log(name[[1]])
const person={
    fname: "r",
    lname: "s",
    age:30,
    hobbies: ['q',"w","r"],
    address: {
        street: "dfg",
        city: "sdf",
        pin: 1234
    }

}

console.log(person)

const todo=[
    {
        id:1,
        text:"dfgh",
        isdone: true
    },
    {
        id:2,
        text:"dfge",
        isdone: true
    },
    {
        id:3,
        text:"dfgf",
        isdone: true
    },
]

const todojson= JSON.stringify(todo)
console.log(todojson)

for (let todos of todo) {
    console.log(todos.id)
}
const x=9

const color='green'

switch(color){
    case 'red':
        console.log("ygdciu")
        break;
    case 'blue':
        console.log("ghsdfciwk")
        break;
}
/* hghoirjvo*/

const addnums=(num1=1,num2=1)=>{
    return num1+num2
}
console.log(addnums(5,5))

function addNums(num1=1,num2=1){
     console.log(num1+num2)
}
addNums(5,5)

todo.forEach((todos)=> console.log(todos))

// objects and cls//
//constructor fun
function Person(fname,lname,dob){
    this.fname=fname
    this.lname=lname
    this.dob=new Date(dob)
    this.getB=function() {
        return this.dob.getFullYear()
    }
}
//initiate obj
const p1= new Person('r','s','4-3-1980')

console.log(p1.fname)

