// const p1 = 'Jonh';
// const p2 = 'Valirchik';
// const p3 = 'Vovanchik';
// const p4 = 'Oleg';
// const p5 =  'Vlados';

// const team = [
//     'John', 
//     'Valerchik', 
//     'Vovanchik', 
//     'Oleg', 
//     'Vlados',
//     'Messi'
// ];

// const team2 = new Array(    
//     'John', 
//     'Valerchik', 
//     'Vovanchik', 
//     'Oleg', 
//     'Vlados',)

// const player = team[1];
// const player4 = team[1 + 2];

// console.log(team);

// team[0] = 'Evlampi';

// console.log(team);





// const numbers = new Array(10) -- 10 emptys
// const numbers = new Array(10,11) -- 10 11



// team.length = 10;
// console.log(team);


// team.length = 3; --- массив сократиться

// length  -- нельзя никогда перезаписывать


// const team = [
//     'John', 
//     'Valerchik', 
//     'Vovanchik', 
//     'Oleg', 
//     'Vlados',
//     'Messi'
// ];

// console.log(team[team.length - 1]); ---last element


// team[team.length] = 'Mitrofan';
// team[team.length] = 'Jora';

// console.log(team);

// for(let i = 0; i < team.length; i++){
//     console.log(`Mr.${team[i]}`);
// }


//========================================== TASKS =======================================================
// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива

// let numsArray = [10,2,33,44,5,6,71,8,9,10];
// let summ = 0;

// for(let i = 0; i < numsArray.length; i++){
//     summ += numsArray[i];
//     console.log(summ);
// }

// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)

// let numbers = [12,1,4,5,66,88,99,10,98,21];

// let summ = 0;

// let arifm = 0; 

// let countOfNumbers = 1;

// for(let i = 0; i < numbers.length; i++){
//     if(i % 2 === 0){
//         summ += numbers[i];
//         countOfNumbers++
//     }
// }

// arifm = summ / countOfNumbers ;

// console.log(arifm);


 // 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного


// let numsArray = [2,-65,7,-1,26,48,-93,58,9];

// let newNumsArray = [];

// for(let i = 0; i < numsArray.length; i++){

//     newNumsArray[newNumsArray.length] = -numsArray[i];

// }

// console.log(newNumsArray);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы

// let randomNumbersArray = [];
// randomNumbersArray.length = 10;

// for(let i = 0; i < randomNumbersArray.length;i++){
//     if(i % 2 === 0){
//         randomNumbersArray[i] = 1;
//     }else if (i % 2 !== 0){
//         randomNumbersArray[i] = 0;
//     }
// }

// console.log(randomNumbersArray);



// 5. заполнить массив последовательными нечетными числами (длина 10)

// let numberArray = [];
// numberArray.length = 10;


// for(let i = 1; i < numberArray.length; i++){
//    numberArray[i] = i * 2 - 1;
// }

// console.log(numberArray);



// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// let numberPovArray = [];
// numberPovArray.length = 10; 

// for(let i = 0; i < numberPovArray.length; i++){
//     numberPovArray[i] = Math.pow(i,2);
// }
// console.log(numberPovArray);



// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива


// let numArr = [10,11,43,65,67,44,66,82,3,6];
// let countOfNumbers = [];

// for(let i = 0; i < numArr.length; i++){

//     if(numArr[i] % 2 === 0){
//        countOfNumbers[countOfNumbers.length] = i;
//     }
// }

// console.log(countOfNumbers.length);



// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// let numArr = [2,14,56,78,44,33,68,5,6,7];

// let maxNumber;

// for(let i = 0; i < numArr.length; i++){
//    
// }



// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)















































