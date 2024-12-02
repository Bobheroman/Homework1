// задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
console.log(password === userPassword? 'Пароль введён верно' : 'Пароль введён неправильно');

//задание 2
let c = 2;
if (c > 0 && c < 10 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//задние 3
let d = 12;
let e = 50;
if (d > 100 || e > 100 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//задание 5
let monthNumber = 3;
if (monthNumber === 12 || monthNumber === 1|| monthNumber === 2) {
    console.log('Это Зима');

} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    console.log('Это Весна');

} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    console.log('Это Лето');

} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    console.log('Это Осень');
} else {
    console.log('Нет такого месяца');
}


// //Доп задание

let number = Number(prompt('введите число'));
if (Number.isNaN(number)) {
    alert('это не число');

} else if (number % 2 !== 0) {
    alert('Число нечетное');

} else {
    alert('Число четное');
}
