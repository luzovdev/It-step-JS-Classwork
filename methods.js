const arr = [23,4,56,43,0,54,23,14,23];
const arr2 = ['one','two','three','two','xxxxxx','yyyyyy','zzzzzz'];
const arr3 = [false,true,false];



//CONCAT=======================================================================================  

// const arrResult = arr.concat(arr2);
// console.log(arrResult);


// Мутация это изменение оригинального массива, добавление удаление изменение массива
// есть методы которые мутируют массив а есть которые не мутируют.

// console.log(arr);
// console.log(arr2);
// console.log(arrResult);

// concat() не мутирует массив
// const arr3 = ['one','two','three'];
// console.log(arr2 === arr3); --- false , массив это объект, массив сравнивается по ссылкам, а не по значению.

// let a = [1,2,3];
// let b = a; // b --- это дубликат ключа к массиву а

// const arr3 = [];
// const resultArr = arr2.concat(arr3);


//========================== COPY OF ARRAY =================================
// const arr2Copy = arr2.concat([]);


//=========================== Add New Element =====================
// console.log(arr2.concat['heelo world']); --- возвращает новый массив с добавленным элементом





//  ======================================= ДОБАВЛЕНИЕ БОЛЕЕ 2х элеметнов ==========================
// console.log(arr.concat(arr2).concat(arr3));
// console.log(arr.concat(arr2,arr3));




//INCLUDES=======================================================================================  
// Возвращает булевое значение
// console.log(arr.includes(54));





//PUSH POP SHIFT UNSHIFT =======================================================================================  

//Добавляет элементы в конец массива
// const result = arr2.push(100,110);
// console.log(result); --- возвращает длинну массива



// // Удаляет последний элемент, и возвращает его
// const result = arr2.pop();
// console.log(result);
// arr2.pop();
// console.log(arr2);



// Удаляет нулевой элемен и возвращает его
// const result = arr2.shift();
// console.log(result);
// arr2.shift();
// console.log(arr2);

//Добавляет в начало 
// const result = arr2.unshift('smth', 'smth else');
// console.log(result); --- возвращает длинну массива
// arr2.unshift('smth', 'smth else');
// console.log(arr2);



//INDEXOF LASTUNDEXOF=======================================================================================  

// const arr2 = ['one','two','three', 'two'];
// console.log(arr2.indexOf('three'));
//console.log(arr2.indexOf('two',2)); 2---  это то число с которого нужно искать элемент
// console.log(arr2.lastIndexOf('two')); --- ищет с конца


//REVERSE=======================================================================================  

// arr2.reverse();
// console.log(arr2);

//SORT=======================================================================================  

// console.log(arr2.sort());  --- сортирует по алфавиту


//SLICE=======================================================================================  

// const result = arr2.slice(); --- вернет новый массив, будет копия массива
// console.log(result);
// console.log(arr2.slice(2)); --- скопировал кусок массив, 2 - это обозначает откуда копировать.
// console.log(arr2.slice(2,5));

//SPLICE=======================================================================================  
//Удаляет и добавляет
// const result = arr2.splice(3, 1,'nnnnnnn','mmmmmmmm');
// console.log(arr2);


























// TASKS=====================================================================================================

// Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 5. Отсортируйте получившийся массив по алфавиту






// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)







