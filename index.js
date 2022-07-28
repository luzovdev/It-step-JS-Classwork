


const person = {
    name : 'John',
    age : 23,
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
//     console.log(person[key]);
//     person2[key] = person[key];
// }
// console.log(person2);
