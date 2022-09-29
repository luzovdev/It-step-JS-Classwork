//Document
//Object
//Model

// console.dir(document.children[0].children[1].children[0]);


// const h1 = document.body.children[2];
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.parentElement);
//----------------------------------------------getElementById-------------------------------------------
//getElemetById --- ВОЗВРАЩАЕТ ЕЛЕМЕНТ, А ВСЕ ОСТАЛЬНЫЕ КОЛЛЕКЦИЮ...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const ul = document.getElementById('list');
//----------------------------------------------getElementsByTagName-------------------------------------------
// const lis = ul.getElementsByTagName('li');
// console.log(ul.children);
//----------------------------------------------getElementsByTagName-------------------------------------------
// const lis = document.getElementsByTagName('li')
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log([...lis]);


//----------------------------------------------getElementsByClassName-------------------------------------------
// const lis = document.getElementsByClassName('item');
// console.log(lis);



//ЗАДАЧА
// const ol = document.getElementById('test');
// const lisByOl = ol.getElementsByClassName('item');

// console.log(lisByOl);

//----------------------------------------------querySelectorAll-------------------------------------------
// const lis = document.querySelectorAll('#list > li:not(.item)')
// console.log(lis);





// ----------------------------------------------------- События ------------------------------------------------

// const btn = document.getElementById('btn');


// btn.addEventListener('click', function (){
//     console.log('HI THERE');
// });


// const onBtnClick = function () {
//     console.log('HI THERE AGAIN!!!');
// }

// btn.addEventListener('click', onBtnClick);
// btn.removeEventListener('click', onBtnClick);

// console.dir(btn);


// Задача

// let clicked = true;
// const onBtnClick = function () {
//     if(clicked){
//         console.log('ctoto');
//         clicked = false;
//     } else{
//         btn.removeEventListener('click',onBtnClick)
//     }
// }

// btn.addEventListener('click', onBtnClick)


// function onBtnClick () {
//     console.log('ctoto');
//     this.removeEventListener('click',onBtnClick);
// }
// btn.addEventListener('click', onBtnClick)

// --------------------------------------------- про event -------------------------------
// const btn = document.getElementById('btn');

// btn.addEventListener('click', (e)  => {
//     console.log(e.target);
// })


// const input = document.getElementById('input');

// input.addEventListener('keydown',function(e){
//     console.log(e.target.value);
// });


// const link = document.getElementById('a');

// link.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('link click');
// })


// window.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })









// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];

// function onLiClick ({target}) {
//     console.log(target.innerText);
// }

// lis.forEach((li)=>li.addEventListener('click', onLiClick))




// ------------------------------------------ про Делегирование -----------------------------


// const list = document.getElementById('list');

// function onLiClick ({target}) {
//     console.log(target);
// }
// list.addEventListener('click', onLiClick)





// ------------------------------------ про разницу между this и targer ------------------------------

// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];

// function onLiClick ({target}) {
//     console.log(target);
//     console.log(this);
// }

// lis.forEach((li)=>li.addEventListener('click', onLiClick))
// list.addEventListener('click', onLiClick)




// --------------------------------------- про всплытие и перехват -------------------------------------------------





















// задача

const btn1 = document.querySelector('.btn1'),
btn2 = document.querySelector('.btn2'),
btn3 = document.querySelector('.btn3')

function ok() {
    console.log('ok');
    this.addEventListener('click',ok)
}

function boom() {
    console.log('boom');
    this.addEventListener('click',boom)
}

