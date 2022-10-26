// // primitive(value) types
// // string
// // number
// // bool
// // undefined     هم مقدار هم نوع است
// // null       مفهوم هیج دارد

// // let name = "Reza";
// // let age = 32;
// // const namee = "Reza2";
// // console.log("hello boy homo");
// // console.log(typeof age);

//==============================================

//reference types
//object:
// // let person = {
// //     name : "Reza",
// //     age : 27,
// //     admin : true
// // };
// // console.log(person.admin);
// // console.log(person["age"]);

//array:
let users = ["mohammad", "ali", "reza"];
// // console.log(users);
// // console.log(users[0]);
// // users[2] = "reyhaneh";
// // users[3] = 2;
// // users[4] = true;
// // console.log(users.length);

//function:
// // function greet(age){
// //     console.log("hello world");
// //     console.log(age * 10)
// //     return age
// // }
// // console.log(greet(), greet(24));

//==============================================

// // == != با مقدار کار دارد
// // === !== با نوع و مقدار کار دارد

//==============================================

// // let what = false
// // let button = what === true ? "hello" : "bye"
// // console.log(button)

//==============================================

// // and: &&
// // or: ||
// // not: !...

// // false: undefined, null,  0, "", NaN
// // true: 1, -2, "..."
// // in or, first true returns 
// // in and, first false returns 

// // let answer = false || "neon", answer2 = 11 && 0
// // console.log(answer, answer2)

//==============================================

// // if (condition){
// //     statement
// // } else if(condition){
// //     statement
// // } else{
// //     statement
// // }

//==============================================

// // switch (key) {
// //     case value:
// //         break;
// //     default:
// //         break;
// // }

//==============================================

// // for (let i = 0; i < 5; i++) {
// //     console.log("Hi");
// // }

//==============================================

// // while (condition) {
// //     statement
// // }

//==============================================

// // do {
// //     statement
// // } while (condition);

//==============================================

// // for (let key in object/array) {
// //     statement
// // }
// // in returns index of array/object 

//==============================================

// // for (let index of object/array) {
// //     statement
// // }
// // of returns value of array/object

//==============================================

// //break , continue

//==============================================

let obj_circle = {
    radius : 1,
    location : {x:1, y:2},
    isVisible : true,
    draw : function() {console.log(
`Circle is in 
${this.location.x} and ${this.location.y} 
redius: ${this.radius} 
visible: ${this.isVisible}`
)}
}
// object == {}

//==============================================

//factory function
// function createCircle(radius) {
//     return {
//         radius, /*radius : radius*/
//     }
// }

// let circle_new = createCircle(5);

//==============================================

//constructor function
// function Circle2(radius){
//     this.radius = radius;
//     this. draw = function() {
//         console.log('draw')
//     }
// }
// let circle3 = new Circle2(3);

//==============================================

// کانست به ابجگت های جدید گیر میدهد ولی با تغییر انها کاری ندارد
// const circle4 = {
//     radius : 6
// }
// circle4.color = "red";
// circle4.draw = function(){
// }
// delete circle4.draw;

//==============================================

// console.log(Object.entries(obj_circle), Object.keys(obj_circle));
// if ("radius" in obj_circle) {
//     console.log("yes");
//     console.log("draw" in obj_circle);
// }

//==============================================

//برای مستقل کردن ابجکت ها چون اشاره گردند

// let  another = {};
// for (let key in circle){
//     another[key] = circle[key];
// }

// or

// let another_2 = Object.assign({color : "red"}, circle);

// or

// let another_3 = {color : "red" , ...circle}

//==============================================

function random(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}
// console.log(
    // random(8,10), 
    // Math.round(4.5), 
    // Math.max(1,2,3,6), 
    // Math.min(1,6,9,5,8), 
    // Math.abs(-58))

//==============================================

// String primive:
let str = "   Reza \n, Hello  ";

// string object:
// const str_2 = new String("    Reza   ");

// console.log(
// `${str},
// ${str.length}, 
// ${str[0]}, 
// ${str.includes("e")}, 
// ${str.startsWith("s")}, 
// ${str.indexOf("a")}, 
// ${str.replace("a","i")}, 
// ${str.toUpperCase()}, 
// ${str.toLowerCase()}, 
// ${str.trimStart()},
// ${str.trimEnd()},
// ${str.trim()}, 
// ${str.split(",")}`
// )

//==============================================

//Date:
// const now = new Date();
// const date1 = new Date('May 11 2020 09:10');
// const date2 = new Date(2018,4,11,9,0);

// console.log(
//     `
//     ${now.toDateString()},
//     ${date1.toDateString()},
//     ${date2.toDateString()},
//     ${now.toISOString()},
//     ${now.getDate() /*date day*/ },
//     ${now.getDay() /*day of week*/}, 
//     ${now.getFullYear()},
//     ${now.getMonth()},
//     ${now.setFullYear(2015)},
//     ${now.toDateString()}
//     `
//     )

//==============================================

let array_numbers = [1,-5,3,6,8,1];
// console.log(
//     `
//     ${array_numbers},
//     ${array_numbers.push(6,4) /*add at the end of array*/},
//     ${array_numbers.unshift(2)/*add at the start of the array*/},
//     ${array_numbers.splice(2,0,"a","b")/*start index, number of delete elements, data to add*/},
//     ${array_numbers},
//     ${array_numbers.indexOf(4)},
//     ${array_numbers.indexOf(1,4)},
//     ${array_numbers.lastIndexOf(1)/*last unit that has the given value*/},
//     ${array_numbers.includes(0)},
//     ${array_numbers.find(/*function without name:*/(num) =>  num > 5)},
//     ${array_numbers.findIndex((num) =>  num > 5)}
//     `
// )

//==============================================

// all change the main
// console.log(array_numbers)
// console.log(array_numbers.pop()) // delete from end
// console.log(array_numbers.shift()) // delete from start
// console.log(array_numbers.splice(2,3))
// console.log(array_numbers)

//==============================================

//delete the whole array

// numbers = []
// or
// numbers.length = 0
// or
// numbers.splice(0,numbers.length)

//==============================================

// no change if value was reference type it point to it's address
// let ans = array_numbers.concat(users)
// or
// ans.slice(2,4)  // start index, end before index 
// or
// let ans = ['a', ...numbers, 'b', ...users, 'c']
// let slice = [...ans] // : we copy it

//==============================================

// array_numbers.forEach((number,index) => {console.log(index, number)});

//==============================================

// console.log(numbers.join(' '))
// console.log(numbers.split(','))

//==============================================

// .sort change:
// circle.sort((a,b) => {
//     a = a.name.toLowerCase();
//     b = b.name.toLowerCase();
//     if (a < b) return 1;
//     if(a > b) return -1;
//     return 0;

// })
//not change:
// numbers.reverse()

//==============================================

//search online:
// numbers.every((value, index, array) => { return value >=0; })
// numbers.some((value, index, array) => { return value >=0; })

//==============================================

let numbers = [1,-5,3,6,8]
// let filter = numbers.filter(value => value > 3)
// console.log(filter)

//==============================================

// let result = numbers.map(value => value * 2)
// console.log(result)
// let result_2 = numbers.map(value => ({item : value}))
// console.log(result_2)

//==============================================
// 6:10

// method => obj
// let video = {
//     title : 'a',
//     play(){
//         console.log(this)
//     }
// }

//function => global(window, global)
// function playvideo(){
//     console.log(this)
// }
// playvideo()
//global object in browser => window
//global object in node => global

// function Video(title){
//     this.title = title,
//     console.log(this)
// }
// let v = new Video('abc')
// new: point to somewhere 

// let Videos = {
//     title : 'a',
//     tag : ['a','b','c','d'],
//     showTag(){
//         this.tag.forEach((tags) => console.log(this,tags), this)
//         console.log(this)
//     }
// }

// Videos.showTag()

//==============================================
//function declaration
// walk();
// function walk(){
//     console.log('walk')
// }

//function experession
// let run = function(){
//     console.log('run')
// };
// run();
// let move = run;
// move();

//==============================================

// function sum(a,b){
//     console.log(a+b)
//     console.log(arguments)
//         let total = 0;
//         for (let value of arguments) {
//             total += value;}
//         console.log(total);
// }
// console.log('------------')
// sum(1,2);
// console.log('------------')
// sum(1);
// console.log('------------')
// sum(1,2,3,4);
// console.log('------------')

// let sumtion = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0)
// console.log(numbers, sumtion)

//==============================================

// function interest(a, b, c=5){
//     b = b || 3.5;
//     return ((a*b)/100)* c;
// }
// console.log(interest(15, 5, undefined))

//==============================================

// let person = {
//     fname : 'reza',
//     lname : 'shahmoradi',
//     fullname(){
//         return `${person.fname} ${person.lname}`
//     }
// }
// console.log(person.fullname())

// //getter => access properties
// //setters => change (mutate)

// let person_2 = {
//     fname : 'reza',
//     lname : 'shahmoradi',
//     get fullname(){
//         return `${person.fname} ${person.lname}`
//     }
// }
// console.log(person_2.fullname)

// let person_3 = {
//     fname : 'reza',
//     lname : 'shahmoradi',
//     get fullname(){
//         return `${this.fname} ${this.lname}`
//     },
//     set fullname(value){
//         let change = value.split(' ');
//         this.fname = change[0];
//         this.lname = change[1];
//     },
// }
// person_3.fullname = 'reyhane andalib';
// console.log(person_3, person_3.fullname)

//==============================================

// function sump(args){
//     console.log(args)
// }
// sump(1,2,3,4)

// function sump_2(...args){
//     console.log(args)
// }
// sump_2(1,2,3,4)

//==============================================

// numbers.forEach((number,i) => console.log(i,number))

//==============================================

// let paragraph = 'hello my name is Reza'
// let seprate = paragraph.split(' ')
// console.log(seprate)
// let joined = seprate.join('-');
// console.log(joined)

//==============================================

// // change:
// numbers.sort();
// console.log(numbers)
// // not change:
// let reverse = numbers.reverse();
// console.log(reverse)

//==============================================

// change:
// for strings first make all char upper or lower case then sort them
numbers.sort();
console.log(numbers)
numbers.sort(function(a,b){
    if(a > b) return -1; /**return first parameter*/
    else if(b > a) return 1; /**return second parameter*/
    else return 0; /**nothing change*/
});
console.log(numbers)
// not change:
// let reverse = numbers.reverse();
// console.log(reverse)

//==============================================

let person_3 = {
    fname : 'reza',
    lname : 'shahmoradi',
    get fullname(){
        return `${this.fname} ${this.lname}`
    },
    set fullname(value){
        if (value !== 'string'){
            //exception:
            throw new Error('value is wrong');
        }
        if (parts) {
            
        }
        // Error:
        // let e = new Error();
        // throw e;
        let change = value.split(' ');
        this.fname = change[0];
        this.lname = change[1];
    },
};

try {
    person_3.fullname = true
} catch (error) {
    alert(error)
}

//==============================================

// change this to what you want:
playvideo.apply([{name:'AliReza'}, {name:'AliReza'}, {name:'AliReza'}]);
playvideo.call({name:'AliReza'}, {name:'AliReza'}, {name:'AliReza'});
let fn = playvideo.bind({name:'AliReza'});
console.log(fn)

// 7:32















