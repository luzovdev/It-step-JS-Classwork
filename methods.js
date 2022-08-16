// 'use strict'
//--- делает чтобы this не был window
// --- запрещает объявление переменной без let и const

// function eat (food) {
//     console.log(`${this.userName} somebody east ${food} by hands`);
// };
// // // У СТРЕЛОЧНОЙ ФУНКЦИИ НЕТ СВОЕГО THIS;
// // const begat = (destination) =>{
// //     console.log(`${this.userName} somebody run to ${destination} `);
// // }


// const person = { 
//     userName: 'John',
//     age: 23,
//     stack : ['CSS','HTML','JS'],
//     liveInCity : true,
//     run : () => {
//         console.log('person run');
//     },
//     // walk () {
//     //     console.log('person walks');
//     // }
    
//     // ===

//     walk : function () {
//         console.log('John walks');
//     },
//     zrat:eat ,

//     run : begat
// };


// const person2 = { 
//     userName: 'Valerchik',
//     age: 53,
//     stack : ['DIG','SOW','HARVEST'],
//     liveInCity : false,
//     run : () => {
//         console.log('person run');
//     },
//     // walk () {
//     //     console.log('person walks');
//     // }

//     // ===

//     walk : function () {
//         console.log('Valerchik walks');
//     },

//     zrat :eat 
// };


// person.run();
// person.walk();



// this === контекст вызыва функции
// person.zrat('bulba');
// person2.zrat('kolbasa');



//error
// const valerchikKushat = person2.zrat;
// valerchikKushat('ezha');


//error
// person.run();



// function fly (dest,speed) {
//     console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`);
// // }

//error
// const fly = (dest,speed) => {
//     console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`);
// }

// const bird = {
//     name : 'kesha',
//     fly
// };

// bird.fly('north');


// const ezh = {
//     name : 'senya',
//     zhrat : eat
// };

// у функций есть методы

// fly.call(ezh ,'south', 45); //--- мы назначаем this сами, 1 значение this 2 и далее это аргументы функции fly

// ===

// fly.apply(ezh,['south',45]) ;
// fly() --- интерпритатор назначает this







////================================================!!!!!!!!!!!!!!!!!!!!!!!!!!!=====================================
// Стрелочные функции использувать нужно в контексте другой функции

// function foo () {
    
//     function smth () {
//         console.log(this);
//     }
//     smth.call(this) // так будет работать

//     const bar = () => {
//         console.log(this);
//     };

//     bar();
//     smth();
// }


// foo.call(person)



// const foo = eat.bind(ezh);
// foo('apple')






// выведите в консоль с интервалом в 1сек числа от 1 до 10 включительно
// после 10 вызовы должны прекратиться


// let count = 0; 

// const id = setInterval(() => {
//         console.log(++count);
// },500);


// setTimeout(() => {
//     clearInterval(id);
// },5000);






// const person = { 
//     firstName: 'John',
//     lastName: 'Johnson',
// };


// если определять поля так то все настройки будут false
// Object.defineProperty(person, 'city',{
//     value: 'Gomel',
//     writable : false, // --- запрещает перезапись
//     enumerable : false,  //--- запрещает быть перечисляемым
//     configurable: false // --- запрещает переконфигурацию полей
// })

// console.log(Object.getOwnPropertyDescriptor(person,'city'));

// Object.defineProperties(person,{
//     city:{
//         value: 'Eremino',
//         writable : true 
//     }
//     bus : {
//         value: 43,
//         writable:true
//     }
// })


// console.log(Object.keys(person));


// Object.defineProperty(person, 'fullName',{
//     get(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set(val){
//         const valArr = val.split(' ');
//         this.firstName = valArr[0],
//         this.lastName = valArr[1]
//     },
//     enumerable:true,
//     configurable:true
// });


// // person.firstName = 'Valerchick',
// // console.log(person.fullName);

// person.fullName = 'Valerchik Ivanov'

// console.log(person);





// function run (){
//     console.log(`${this.name} run to`);
// }



// const person = { 
//     firstName: 'John',
//     lastName: 'Johnson',
// };

// Object.defineProperties(person, 'goto',{
//     get(){
//         return run.bind(this);
//     }
// })

// setTimeout(person.goto, 1000)






// const person = { 
//     firstName: 'John',
//     lastName: 'Johnson',
//     _age:0
// };

// если называть поле _age то это означает что его нельзя трогать

// Object.defineProperty(person, 'age',{
//     get(){
//         return this._age;
//         // если написать this.age, то будет рекурсия 
//     },
//     set(val){
//         if(typeof val === 'number'&& val > 0 && val < 95){
//             this._age = val;
//         }
//     }
// });

// person.age = 1;

// console.log(person.age);



// защита  поля

const person = { 
    firstName: 'John',
    lastName: 'Johnson',
};

// Object.preventExtensions(person);
// Object.isExtensible(person);
// Object.seal(person);
// Object.isSealed(person);
// Object.freeze(person);
// Object.isFrozen(person);

person.city = 'gomel'; 

delete person.firstName; 
person.lastName = 1000;

console.log(person);



