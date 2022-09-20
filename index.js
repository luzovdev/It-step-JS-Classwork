//event loop
//promises 
//async await



// func(bar(foo())) // callback hell

//функция которая передается в промис выполняется синхронно
// const pr = new Promise(() =>{

// });

// console.log(pr);

new Promise((resolve,reject) => {
    resolve('result')
}).then((res) =>{
    console.log(res);
    return res;
}).then((res) => {
    console.log(res);
})

// setTimeout(() => {
//     console.log('one');
// }, Math.random() * 1000);
// setTimeout(() => {
//     console.log('two');
// }, Math.random() * 1000);
// setTimeout(() => {
//     console.log('three');
// }, Math.random() * 1000);



