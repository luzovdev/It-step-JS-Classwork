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

// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const firstItem = document.getElementById('fitem');
// const pItem =   document.getElementById('pitem');

// wrapper.addEventListener('click', () =>{
//     console.log('WRAPPER');
// });
// list.addEventListener('click', () =>{
//     console.log('LIST');
// });

// const liListener = (event) =>{
//     // event.stopPropagation();
//     event.stopImmediatePropagation();
//     console.log('LI');
// };
// const secondLiListener = (event) =>{
//     console.log('LI SECOND');
// };

// firstItem.addEventListener('click', liListener);
// firstItem.addEventListener('click', secondLiListener);

// pItem.addEventListener('click', () =>{
//     console.log('P');
// });




// --------------------------------------------------------------------------------------------------
// const list = document.getElementById('list');
// const pItem =   document.getElementById('pitem');
// console.log(list.innerText);
// console.log(list.innerHTML);

// pItem.innerText = '<h1>Hello</h>';
// pItem.innerHTML = '<h1>Hello</h>';


// ------------------------------------------ПРО АТРИБУТЫ--------------------------------------------------------
// const pItem =   document.getElementById('pitem');
// pItem.addEventListener('click', () =>{
//     // pItem.setAttribute('wasClicked','true');
//     // console.log(pItem.getAttribute('wasClicked'));
//     // const pItemCopy = pItem.cloneNode(true); // true - значение обозначает что будет глубокое копирование
//     // console.log(pItemCopy);
//     // console.log(pItem);
//     // pItem.dataset.smth = 'ppp'

//     // console.log(pItem.dataset.smth);
// })


// ------------------------------------------ПРО Удаление--------------------------------------------------------
// const pItem =   document.getElementById('pitem');
// pItem.addEventListener('click', () =>{
//     pItem.remove();
//     console.log(pItem);
// })


// ------------------------------------------ПРО Добавление Элементов--------------------------------------------------------

// const list = document.getElementById('list');
// list.addEventListener('click',() => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'some text here';


//     // const bratik = list.getElementsByTagName('li')[2];
//     // list.insertBefore(newLi,bratik)

//     // list.append(newLi); // --добавение в конец
//     // list.prepend(newLi) // -- добавление в начало
//     // list.insertAdjacentElement('afterbegin',newLi);
//     // list.insertAdjacentElement('afterend',newLi);
//     // list.insertAdjacentElement('beforebegin',newLi);
//     // list.insertAdjacentElement('beforeend',newLi);


//     // list.insertAdjacentHTML('afterbegin','<h1>Hello</h1>');
//     // list.insertAdjacentText('afterbegin','<h1>Hello</h1>');



// });



// --------------------------------------------------------------------------------------------------


// const list = document.getElementById('list');
// list.addEventListener('click',() => {

//     const item3 = list.getElementsByTagName('li')[2];
//     // list.append(item3);
//     // list.append(item3.cloneNode(true));
// });




// --------------------------------------------Работа с классами------------------------------------------------------


const list = document.getElementById('list');
const pItem = document.getElementById('pitem');

// pItem.addEventListener('click',() => {
//     pItem.style.backgroundColor = 'red'; -- так не правильно 
// });

pItem.addEventListener('click',() => {
    // pItem.style.padding = clientX + 'px'; // так правильно так как зависит от js
    // pItem.classList.add('active'); -- нужно отдавать предпочтение классу, а не node.style
    // pItem.classList.remove('two');
    // pItem.classList.contains('two');
    // pItem.classList.replace('one','bla');
    pItem.classList.toggle('active');
});



