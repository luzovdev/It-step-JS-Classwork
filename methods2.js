



//function expression
// function add (a,b){
//    return a + b;
// }
//function declaration
// const div  = function(a,b){
//     return a / b
// };


// arrow function
// const div = (a,b) => {
//     return a / b
// };

// console.log(div(4,2));





const arr = [
'john',
'valerchik',
'peter',
'semen',
'oleg',
'samuil',
'inokentii'];

// специальный вид цикла для переборки итерабельных объектов

// for(let item of arr){
//     console.log(item);
// }







//=====================================перебирающие методы =======================================



//===================================================forEach --- лучше предпочиать циклу for
// под капотом
// const arr = [
// 'john',()=>{}
// 'valerchik',()=>{}
// 'peter',()=>{}
// 'semen',()=>{}
// 'oleg',()=>{}
// 'samuil',()=>{}
// 'inokentii'()=>{}];


// arr.forEach((item, index, mass) => {
//     console.log(item , 'i' + index);
// });

// let arr2 = []



// ==========================================map()================================ --- создаёт новый массив , нужно когда на основании массива создать новый. 
// под капотом
// const arr = [
// 'john',()=>{}
// 'valerchik',()=>{}
// 'peter',()=>{}
// 'semen',()=>{}
// 'oleg',()=>{}
// 'samuil',()=>{}
// 'inokentii'()=>{}];

// const newArr = arr.map((item) => {
//     console.log(item);
// });

// console.log(newArr);


// const newArr = arr.map((item) => {
//    return 'Mr.' + item
// });

// console.log(newArr);


// // !!!! так передается объект если запись производится через круглые скобки.
// const newArr2 = arr.map(() => ({}));


//============================================some=========================================

// const  result = arr.some(() => {
//     return true;
// });

// console.log(result);


// const  result = arr.some((item) => {
//     return item.length > 7;
// });

// console.log(result);

//===========================================every --- для всех айтемов============================================

// const res = arr.every((item) => {
//     return  item.length > 13;
// });

// console.log(res);


// ==================================== filter ==========================================

// const result = arr.filter((item) =>{

//     return item.length > 5;
// });


// console.log(result);



// ==================================== find ==========================================

//!!! includes не может посмотреть массив объектов , только приметивы.
// const result = arr.find((item) =>{
//     return item === 'valerchik'
// });

// console.log(result);


// ==================================== findIndex ==========================================

// const result = arr.findIndex((item) =>{
//     return item === 'valerchik'
// });

// console.log(result);



// ==================================== sort ==========================================







// ==================================== reduce ==========================================


const persons = [
    {userName: 'john', age: 42}, 
    {userName: 'peter', age: 12},
    {userName: 'semen', age: 57},
    {userName: 'oleg', age: 76},
    {userName: 'smauil', age: 66},
    {userName: 'innokentij', age: 14}
];

const numbers = [1,2,3,3,12,42,3,423];

const result = numbers.reduce((sum, number) => {
    return sum + number;
});

console.log(result);
