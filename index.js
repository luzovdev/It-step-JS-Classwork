// ES5 

// const person = {
//     userName : "John",
//     age : 23,
//     brain : true
// };

// const person2 = {
//     userName : "Valerchik",
//     age : 23,
//     brain : true
// };

// const programmer = {
//     userName : "Valerchik",
//     age : 23,
//     brain : true,
//     stack : ['HTML','CSS']
// };


//Если вызывать функцию через new то будет пустой объект
// Класс Person

// function Person (userName, age){
//     // this = {};

//     this.userName = userName;
//     this.age = age;
//     this.brain = true
//     // return this
// }


// const person = new Person("Jonh",23); // инстанс класса person
// const person2 = new Person("Valerchik",20);

// console.log(person);
// console.log(person2);
// console.log(person instanceof Person);


// Prototype

// function Person (userName, age){
    // this = {};

    // this.userName = userName;
    // this.age = age;
    // this.brain = true;
    
    // return this
// }

// console.log(Person.prototype.constructor('Peter',65));


// Person.prototype.constitution = 'bla bla';
// const person = new Person("Jonh",23);
// console.log(person.constitution);
// const person4 = new person.__proto__.constructor('Oleg',88)





//ERROR
//Стрелочная фунцкия не может быть конструктором
// const Programmer = () => {
//     this.a = 2;
// };

// console.log(new Programmer ());



//НАСЛЕДОВАНИЕ

// function Person (userName, age){
//     this.userName = userName;
//     this.age = age;
//     this.hasBrain = true;
// }
// Person.prototype.run = function () {
//     console.log(`${this.userName} runs`);
// }
// function Programmer (stack, ...args) {
//     Person.call(this,...args);
//     this.stack = stack;
// }

// Programmer.prototype = Person.prototype;
// Programmer.prototype.code = function () {
//     console.log(`${this.userName} codes`);
// }



// const p1 = new Programmer(['HTML','CSS'],'John',61);
// const person = new Person ('Valerchik',12);

// console.log(p1);














//ES6 classes
//class - это функция

class Person {

    hasBrain = true;
    #age = 0;
    #creditPayments = [2,6,3,8,3,7,2];
    constructor(userName,age) {
        this.userName = userName;
        this.age = age;
    }

    #calculateAverage() {
        return this.#creditPayments.reduce((sum,item) => sum + item) / this.#creditPayments.length
    }

    showAveragePayment() {
        console.log(this.#calculateAverage());
    }

    set age (val) {
        if(val > 0 && val < 100){
            this.#age = val;
        }
    }

    get age () {
        return this.#age;
    }

    run() {
        console.log(`${this.userName} runs`);
    }
}

class Programmer extends Person{
    constructor(stack, ...args) {
        super(...args); // --- Person.call(this)
        this.stack = stack;
    }

    code() {
        console.log(`${this.userName} codes`);
    }
}

// const p1 = new Person ('Valerchik' , 12)
// const p2 = new Programmer (['JS','CSS','Html'],'Val', 22)
// p1.showAveragePayment()
// console.log(p2);


class JSProgrammer extends Programmer {
    smoozie = true;

    run (){ // method ovveride
        console.log('In a fushion way');
        super.run()
    }
}


const jsp = new JSProgrammer(['CSS','JS'],'Oleg');

console.log(jsp);
jsp.run()




