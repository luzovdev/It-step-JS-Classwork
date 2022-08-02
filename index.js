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













//1. Написать функцию которая возвращает среднее арифм 4х чисел


function agv (a,b,c,d){
    return (a + b + c + d) / 4;
}

console.log(agv(5,5,523,67));

//2. Написать функцию которая возвращает среднее арифм любого количества эл-тов чисел

function agv2 (...arrArguments){
    console.log(arguments);
    // const arrArguments = [...arguments]; --- это заменятеся в ()

}
// arguments --- нету методов массива,  поэтому это не массив, а ПСЕВДОМАССИВ.
agv2(2,34,5,6,7,8)

