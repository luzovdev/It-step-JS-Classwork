


// const person = {
//     name : 'John',
//     age : 23,
//     a:3,
//     city : 'Gomel',
//     isProgrammer : true,
//     stack:['HTML','CSS','JS'],
//     size:{
//         width:23,
//         height:200,
//         weight:100
//     }
// };




// поле объекта(свойство объекта) : значение объекта;


// console.log(person.age);
// console.log(person);
// console.log(person['city']);

// const str = 'city';
// console.log(person[str]);


//========изменение переменной=============
// person.name = 'Valerchick'
// console.log(person);

//==========Добавление полей ==============
// person.lastName = 'Ivanov';
// console.log(person);

// Проверка на наличие полей ===============
// console.log('isProgrammer' in person);
// console.log(person.hasOwnProperty('isProgrammer')); --- лучший способ

//=============Удаление полей из объекта=============
// delete person.age;
// console.log(person);

//=================Ссылка на макет===============
// const person2 = person;
// person.name = 'Valerchir';
// console.log(person2);


//=================== копия объекта ================

// const person2 = {};

// for(let key in person){
//     if(Array.isArray(person[key])){
//         person2[key] = person[key].slice();
//     }
//     person2[key] = person[key];
// }
// person.stack.push('react');

// console.log(person2);





// rest spread destructuring
// const arr = [5,6,7,8,9];
// const [a,b] = arr;


// const { 
//     age: personAge = 100, 
//     lastName = 'Ivaniv',
//     size:{
//         height
//     } = {height:999},
//     stack:[a,b, ...kusokStacka],
//     ...kusokPerson,
//  } = person;
// console.log(kusokStacka);

                        //lastName = 'Ivaniv' , дефолтное значение запишется если нету такого поля у объекта person
                        // аналог
                        // const age = person.age;

// const person2 = {
//         a: 2,
//      ...person,
   
// };
// console.log(person2 );


// объединение объектов 

// const person3 = {
//     pogremuha : 'lobzik',
//     hodki : 6
// }

// const person2 = {
//     ...person3,
//     ...person
// }

// console.log(person2);


//ПОЛНАЯ КОПИЯ ОБЪЕКТА   -------- ИСПОЛЬЗУЕТСЯ УЛЬТРАЧАСТО----

// const person2  = {
//     ...person,
//     stack: [...person.stack],
//     size: {...person.size},
// };

// console.log(person2.size === person.size);





// const nick = 'bobik';

// const dog = { 
//     age: 2,
//     nick
// }

// console.log(dog);


// const str = 'city';

// const userPerson = { 
//     name: 'Valerchik',
//     [srt] : 'Gomel'
// }







//============================tasks=============================================

// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
//  хранить сумму oldSubscribers + newSubscribers
//  если число allSubscribers > 700 вывести you are famous, иначе try harder


// const subscribers = {
//     oldSubscribers: 300,
//     newSubscribers: 250,
// }
// subscribers.allSubscribers = subscribers['oldSubscribers'] + subscribers['newSubscribers'];


// if(subscribers['allSubscribers'] > 700){
//     console.log('you are famous');
// }else{
//     console.log('try harder');
// }


//  2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//  ]
//  используя методы массивов и циклы 
//  вывести в консоль 'its valid', если во всех объектах поле a > b

// let objectArr = [{a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}];
// let validCount = 0;
// for(let i = 0; i < objectArr.length; i++){
//     if(objectArr[i].a > objectArr[i].b){
//       validCount++
//     }
// }

// if(objectArr.length === validCount){
//     console.log('its valid');
// }else{
//     console.log('no valid');
// }




// 3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]


let arrOfObj = [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}];

let povArrOfObj = [];

for(let i = 0; i < povArrOfObj.length;i++){
   
}

console.log(povArrOfObj);




//  4. создать массив на основе предыдущего, в котором
//  поля a и b будут последовательно помещены в массив
//  пример: [ 2, 1, 5, 144, 95, 49]

// let arr = [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}];
// let arr2 = [];

// for(let i = 0; i < arr.length;i++){
//     arr2.push(arr[i].a, arr[i].b);
// }

// console.log(arr2);

