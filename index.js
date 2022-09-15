// 1. На этом изображении показано как нужно организовать наследование между классами.
// Требования:
// Human должен принимать параметры name,аде.
// Все представители этого класса должны иметь метод ,sayHi(), который возвращает строку с приветствием.
// Programmer должен принимать параметр technologies (массив строк) с названиями любых технологий (пример: ['HTML', 'CSS', 'JS']).
// Все представители этого класса долны иметь метод .startCodingO, который возвращает строку вида 'David is coding using HTML, CSS, JS'.
// Имя 'David' и названия технологий должны меняться в зависимости оттого, каким объектом был вызван метод.
// Sportsman должен принимать параметр medals, который характеризует количество медалей у спортсмена.
// FootballPlayer должен принимать параметр team (строка) с названием команды где играет футболист.
// Все представители этого класса должны иметь метод .run(speed), где speed это число характеризующее скорость бега.
//  Метод .run(б) должен возвращать строку вида 'John is running б kmph', где имя 'John' может меняться в зависимости от объекта вызывающего метод ,run().
// HockeyPlayer должен принимать параметр weight (число) характеризующим массу хоккеиста.
// Все представители этого класса должны иметь метод .pushOpponent(opponentName), который должен возвращать строку вида 'Bill pushed Brandon and used 123kgs',
// имя 'Bill' и количество кг могут меняться в зависимости от объекта запустившего метод. Имя 'Brandon' может меняться в зависимости от opponentName
// переданного в момент вызова метода.


class Human {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   sayHi() {
      console.log('Hi');
   }
}


class Programmer extends Human {

   constructor(technologies, ...args) {
      super(...args)
      this.technologies = technologies;
   }

   startCoding() {
      console.log(`${this.name} is coding using ${this.technologies}`);
   }
}


const programmer1 = new Programmer(['Html', 'Css', 'Js', 'React'], 'Valerchik', 51);
const programmer2 = new Programmer(['Html', 'Css', 'Js', 'Vue'], 'Dimonchik', 22)

console.log(programmer1.startCoding());
console.log(programmer2.startCoding());


class Sportsman extends Human {
   constructor(medals, ...args) {
      super(...args);
      this.medals = medals;
   }
}

const sportsman = new Sportsman(['3 golds', '5 silver', '8 bronze'], 'Vova', 24);
console.log(sportsman);


class FootballPlayer extends Sportsman {
   constructor(team, ...args) {
      super(...args);
      this.team = team;
   }

   run(speed) {
      console.log(`${this.name} is running ${speed} kmph`);
   }
}


const footballPlayer = new FootballPlayer('barcelona', ['5 silver', '8 bronze'], 'Sanya', 34)
console.log(footballPlayer);


class HockeyPlayer extends Sportsman {
   constructor(weight, ...args) {
      super(...args);
      this.weight = weight;
   }

   pushOpponent(opponentName) {
      console.log(`${this.name} pushed ${opponentName} and used ${this.weight}kgs`);
   }
}


const hockeyPlayer = new HockeyPlayer(156, 'no medals', 'Mike', 19)
console.log(hockeyPlayer.pushOpponent('Viktor'));



// 2. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device,
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две
// батарейки). Создать класс Gamepad, который наследует от
// Device. Класс Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”, метод disconnect(),
// который отключает Gamepad и метод play(), который
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.
// Подключить один девайс к другому можно только если есть
// 2 батарейки. Подключить Gamepad можно только если
// isConnected == false. Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.


// 3. Написать конструктор товара, который должен принимать
// имя, стоимость, цвет и объект params с параметрами (длина,
// ширина, высота). Для параметров params, должен
// существовать конструктор Params, который принимает три
// параметра (width, length, height)


class Product {
   constructor(nameOfProduct, priceOfProduct, colorOfProduct, params) {
      this.name = nameOfProduct;
      this.price = priceOfProduct;
      this.color = colorOfProduct;
      this.params = params;
   }
}

class Params {
   constructor(width, lenght, height) {
      this.width = width;
      this.lenght = lenght;
      this.height = height;
   }
}


const phone = new Product('Iphone 13', '999$', 'Black', new Params('7,65', '71,5', '146,7'))


console.log(phone);




