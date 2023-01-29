// let num = Number(prompt());
// result = (num >= 14 && num <= 90) ? alert('число в диапазоне') : alert('число не в диапазоне');

// let age = Number(prompt());
// result = (age < 14 || age > 90) ? alert('число не в диапазоне') : alert('число в диапазоне');



// let que = prompt('кто там?');

// if (que === 'Админ'){
//     let pass = prompt('пароль?');
//     if (pass === 'Я главный'){
//         alert('здравствуйте');
//     } else if (pass === '' || pass == null){
//         alert('отменено');
//     } else {
//         alert('неверный пароль');
//     }
// } else if (que === '' || que == null){
//     alert('отменено');
// } else {
//     alert('я вас не знаю');
// }


// function checkAge(age) {
//    return (age > 18) ? true: confirm('родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('родители разрешили?');
//  }


// function min(a, b){
//     if (a > b){
//         return b;
//     } else {
//         return a;
//     }
// }
// let a = Number(prompt('a: '));
// let b = Number(prompt('b: '));
//  let result = min(a, b);
//  alert(result);

// let x = Number(prompt('x: '));
// let n = Number(prompt('n: '));
// let result = 1;
// function pow(x, n){
//     for (let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }
// let qwe = pow(x, n);
// alert(qwe);

// let a = Number(prompt('a: '));
// let b = Number(prompt('b: '));
// let action = prompt('action: ');

// function calc(action, a, b){
//     let result = 0;
//     if (action == 'add'){
//         result = a + b;
//     } else if(action == 'multi'){
//         result = a * b;
//     } else if(action == 'subtract'){
//         result = a - b;
//     } else{
//         result = undefined;        
//     }
//     return result;
// }
// alert(calc(action, a, b));


// let browser = prompt();
// if (browser == 'Edge'){
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser =='Firefox' || browser == 'Safari' || browser == 'Opera'){
//     alert("Okay we support these browsers too");
// } else{
//     alert("We hope that this page looks ok!")
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1: 
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3: 
//         alert('Вы ввели число 2, или 3')
//         break; 
// }



// let a = Number(prompt('a: '));
// let b = Number(prompt('b: '));
// let action = prompt('action: ');
// function calc(action, a, b){
//     let result = 0;
//     switch(action){
//         case 'add':
//             result = a + b;
//             break;
//         case 'multi':
//             result = a * b;
//             break;
//         case 'subtract':
//             result = a - b;
//             break;
//         default:
//             result = undefined;
//             break;           
//     }
//     return result;
// }
// alert(calc(action, a, b));


for (var i = 0; i < 19; i++){
    console.log(i)
}