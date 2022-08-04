//Function --- это объект

//Function declaration



// function add (a,b) {
//     let result = a + b;

//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return;
//     }

//     return result; //return выключает функцию
// }

// let calc = 10 / add(2,3);

// console.log(calc);


// //Function expression
// const foo = function (){
//     console.log('Im good!');
// }
// // Функция без имени - анонимная


// const test = add; // --- тоже function expression
// console.log(test(2,2));

                                                                //hosting
//hosting --- всплытие переменных
//temporary dead zone --- это та часть когда, где всплытие произошло но доступа еще нет.

//error

// console.log(a);
// let a = 0;


// foo();
// bar(); --- error

// function foo (){
//     console.log("Iam fooo");
// }

// const bar = function(){
//     console.log("Im bar");
// }

// anonimus self inworking function (IIFE)
// (function foo (){
//     console.log("Iam fooo");
// })()


//modules

// let sum = 30;
// let sumPeople = 20;
// let sumPeopleSmoking  = 40;

// const result = (function(){
//     let sumPeople = 99;
//     return sumPeople
// })()



                                //FUNCTION SCOPE BLOCK SCOPE


//BLOCK SCOPE
// let a = 2; 
// var b = 3;

// if(true){
//     let a = 4;
//     var b = 5;
// }

// console.log(a);
// console.log(b);


//FUNCTION SCOPE

// let a = 2; 

// function foo(){
//     let a = 3;
//     console.log(a); 
//     function bar (){
//         let a = 4;
//         console.log(a);
//     }
//     bar()
// }
// foo()

// console.log(a);



// let a = 2; 

// function foo(){
//     let a = 3;
//     function bar (){
//         console.log(a);
//     }
//     bar()
// }
// foo()



//===========================================tasks======================================



//1. Написать функцию которая возвращает среднее арифм 4х чисел


// function agv (a,b,c,d){
//     return (a + b + c + d) / 4;
// }

// console.log(agv(5,5,523,67));


// ДЗ
//2. Написать функцию которая возвращает среднее арифм любого количества эл-тов чисел

// function agv2example (...arrArguments){
//     // const arrArguments = [...arguments]; --- это заменятеся в ()


// }
// arguments --- нету методов массива,  поэтому это не массив, а ПСЕВДОМАССИВ.
// agv2example(2,34,5,6,7,8)


// function avg2 (){
//     let arrArguments = [...arguments];
//     let summ = 0;
//     for(let i = 0; i < arrArguments.length; i++){
//         summ += arrArguments[i];
//     }
//     return console.log(summ / arrArguments.length); 
// }

// avg2(2,4,5,6);