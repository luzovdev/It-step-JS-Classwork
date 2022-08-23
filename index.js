
// Создать функцию которая принимает массив футболистов (из предыдущего задания)
// Функция должна "пробегать" по массиву и выяснять какие футболисты играют в одинаковых командах.
// функция должна возвращать двумерный массив футболистов сформированный по принципу: 1 массив - 1 команда
// пример возвращаемого массива:

// [
// 	[
// 		{
// 		name:"Messi",
// 		team:"Barcelona"
// 		},
// 		{
// 		name:"Suarez",
// 		team:"Barcelona"
// 		}
		
// 	],
// 	[
// 		{
// 		name:"Ronaldo",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Buffon",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Gonsalo",
// 		team:"Juventus"
// 		}
// 	],
// 	[
// 		{
// 		name:"Pedro",
// 		team:"Chelsea"
// 		},
// 		{
// 		name:"Zuma",
// 		team:"Chelsea"
// 		}
// 	],
// 	[
// 		{
// 		name:"PSG",
// 		team:"Rico"
// 		}
// 	]
// ]








// // 2. 
// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['gomel','brest', 'minsk']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             hight: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };

// const car2 = {
//     model: 'lada',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['minsk','grodno', 'eremino']
//     },
//     specs: {
//         price: {
//             low: 100,
//             mid: 2000,
//             hight: 2500
//         },
//         engine: {
//             power: 200,
//             lowPower: 100
//         }
//     }
// };

// const car3 = {
//     model: 'bmw',
//     adress: {
//         country: {
//             city: {
//                 name: 'boston',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['new york', 'berlin', 'bacelona']
//     },
//     specs: {
//         price: {
//             low: 100000,
//             mid: 150000,
//             hight: 200000
//         },
//         engine: {
//             power: 1000,
//             lowPower: 500
//         }
//     }
// };


// const arrCars = [car, car2, car3];



// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона минск
// 2.2 просуммировать общую стоимость авто по наивысшей цене
// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
// 2.4 найти самое дешевое авто по наименьшей цене




// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let names = ['Артем','Семён','Вадим','Кирил','Даниил','Стас','Юра'];


// let namesResult = names.some( (item) => item === 'Семён');

// if(namesResult){
//     console.log('Такое имя есть');
// }else{
//     console.log('Такого имени нету');
// }


// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// let nums = [2,45,66,13,22,10,32,4,5];

// let summPositiveNumbers = nums.reduce((acc,item) => {
//     if(item % 2 === 0){
//        return acc + item;
//     }
//     return acc
// },0)

// console.log(summPositiveNumbers);

// 4. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let userNums = [];

// let userInput;

// for(let i = 0; i < 10; i++){
//     userInput = +prompt('Введите числа!');

//     userNums.push(userInput);
// }

// let checkOnNumber = userNums.every((item) => !isNaN(item) )


// if(checkOnNumber){
//     console.log('Все элементы являются числами');
// }




// 1. Создать объект check с двумя методами:
// .checkNameLength()
// .checkIsAdult()


// let check = { 
//     checkNameLength(){
//       return this.name.length > 4
            
//     },
//     checkIsAdult(){
//       return this.age >= 18
            
//     }
// }
// создать два объекта person1 и person2 с полями name и age (задать самостоятельно)

// let person1 = { 
//     name : 'vadim',
//     age : 25
// }

// let person2 = {
//     name : 'Dima',
//     age : 18
// }


// check.checkNameLength.call(person1)
// check.checkIsAdult.call(person2)
// вызвать методы из объекта check и передать в них в качестве контекста
// person1 или person2. 
// checkNameLength() должен возвращать true если поле name у объекта больше 4
// checkIsAdult() должен возвращать true если поле объекта age больше или равно 18

// 2. Создать объект person с полем name и методом eat.
// Создать массив строк food в котором перечисляется любая еда (не менее 4 наименований)
// Метод eat должен принимать строку food с названием еды и возвращать строку вида 
// person.name + " eats " + food
// Используя setTimeout или setInterval запустите метод eat объекта person раз в секунду, передавая при этом каждый раз следующее название еды из массива.

let person = {
    name: 'Vasia',
    eat
}


let foods = ['Апельсин','Мандарин','Киви','Яблоки'];

let index = 0;

function eat (fd) {
     console.log(`${this.name} eats ${fd[index++]}`);
}


let result = setInterval(eat.bind(person,foods),1000);

setTimeout(() => {
    clearInterval(result);
},4000);




