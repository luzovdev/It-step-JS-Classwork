

//Function declaration



function add (a,b) {
    let result = a + b;

    if(typeof a !== 'number' || typeof b !== 'number'){
        return;
    }

    return result; //return выключает функцию
}

let calc = 10 / add(2,3);

console.log(calc);



