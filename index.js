


const person = {
    name : 'John',
    age : 23,
    a:3,
    city : 'Gomel',
    isProgrammer : true,
    stack:['HTML','CSS','JS'],
    size:{
        width:23,
        height:200,
        weight:100
    }
};




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
//     size: {...person.size}
// };

// console.log(person2.size === person.size);





const nick = 'bobik';

const dog = { 
    age: 2,
    nick
}

console.log(dog);


const str = 'city';

const userPerson = { 
    name: 'Valerchik',
    [srt] : 'Gomel'
}


