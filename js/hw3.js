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
let monthNumber = 12;
switch (monthNumber) {
    case 12||1||2:
        console.log('Это Зима');
        break;

     case 3||4||5:
        console.log('Это Весна');
        break;

    case 6||7||8:
         console.log('Это Лето');
         break;

    case 9||10||11:
        console.log('Это Осень');
        break;

    default:
        console.log('Нет такого месяца');
}

//Доп задание
let number = Number(prompt('введите число'));
switch (number) {
    case Number.isNaN(number):
        alert('это не число');
        break;

    case number % 2 !== 0:
        alert('Число нечетное');
        break;

    default:
        alert('Число четное');
        break;
}
