// callback
// hof


// function func (a, cb) {
//     return 2 + cb(a);
// }


// function square (a) {
//     return a * a;
// }


// closure

// let a = 2;

// // lexical environment
// const foo = (b) => {
//     return  a + b;
// };


// const res = foo(5);



// const arr = [
//     {a: 3},
//     {a: 5}
// ];

// let obj = arr[0];
// obj = null;

// console.log(arr[0]);


// let a = 0;

// function foo () {
//     return ++a;
// }


// let a = 1;

// function foo () {
//     a = a + 1;
//     return a;
// }

// function bar (cb) {
//     let a = 10;

//     return cb();
// }

// console.log( bar(foo) );




//  hof
// FUNCTIONAL PROGRAMMING

// function bla () {
//     let a = 4;

//     return function ooo ( ) {
//         a = a + 1;
//         return a;
//     }
// }


// const ooo = bla();
// const hhh = bla();


// console.log(ooo())
// console.log(hhh())
// console.log(ooo())


// curry

// const add = (a,b,c) => {
//     return a + b + c;
// }

// add(2, 5, 7);
// add(2)(5)(7);


// const add = a => b => c => d => a + b + c + d;

// const onePlus = add(1);
// const onePLusTwoPlus = onePlus(2);
// const res = onePLusTwoPlus(3);

// console.log( add(1)(2)(3) )



// paritally applied

// const add = (a,b,c) => {
//     return a + b + c;
// };

// add(1,2)(3);

// const add = (a,b) => {
//     a.filter((item) => {
//         item.includes('smth')
//     })
//     .sort(() => {})
//     .map(() => {})


//     return (prefix) => {
//         return prefix + a.join(' ') + b.join(' ');
//     }
// };

// add([1,2,3], ['a','b','c'], 'mr')
// add([1,2,3], ['a','b','c'], 'mrs')

// const partialAdd = add([1,2,3], ['a','b','c']);
// console.log(partialAdd('mr'))
// console.log(partialAdd('mrs'))


// memoizing
// hof

// HIGHER ORDER FUNCTION*****

// function add (a, b) {
//     return a + b;
// }

// // function addWithLogging (a, b) {
// //     console.log(a,b);
// //     return add(a,b);
// // }

// function wrapWithLogger (add) {

//     return function (...args) {
//         console.log(...args);
//         return add(...args);
//     };
// };

// function sub (a, b) {
//     return a - b;
// }

// function replaceLast (arr, str, length) {
//     arr.pop()
//     arr.push(str);
//     arr.length = length;
//     return arr;
// }

// const addLogger = wrapWithLogger(add);
// const subLogger = wrapWithLogger(sub);
// const replaceLastLogger = wrapWithLogger(replaceLast)

// // console.log(addLogger(2,3));



// console.log(replaceLastLogger(['a', 'b', 'c'], 'd', 20));

// console.log(replaceLast(['x', 'c', 'n'], 'u', 10));






// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0


// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// classNameEditor('active', true) // добавляем класс ====>>>>> 'active'
// classNameEditor('test', true) // =====>>>>> 'active test'
// classNameEditor('btn', true) // =====>>>>> 'active test btn'
// classNameEditor('test', false) // =====>>>>> 'active btn'
// classNameEditor('blabla', false) // =====>>>>> 'active btn'

// .split()
// .join()


// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// arr.map(() => {})
// map(arr, () => {})





// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function toString (val) { return val + ''; }

// sumTo(2,3, someCallback)

// function sumTo (a,b,cb) { 
//     let sum = a + b;
//     return cb(sum);
// }

// function toString (val) { return val + ''; }
// function toBoolean (val) { return Boolean(val) }




// console.log(sumTo(2,5,toString));
// console.log(sumTo(1,2,toBoolean));



// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.


// function checkLogin(login,truelogin,cb1, cb2){
//     if(login === truelogin){
//         return cb1()
//     }else{
//         return cb2()
//     }
// }

// function getTrueLogin () { 
//     alert('УСПЕХ!!!');
// }

// function getFalseLogin () {
//     alert('Error');
// }

// checkLogin(prompt('Введиет логин'),'Mike',getTrueLogin,getFalseLogin)

// 7. Создать объект 
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false, 
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения
