// задание 1
let a = Number(10);
alert(`Значение А = ${a}`);
a = 20;
alert(`А теперь = ${a}`);

//задание 2
let firstIphone = Number(2007);
alert(`Первый iPhone вышел в ${firstIphone} году.`);

//задние 3
let jsFather = String('Brendan Eich');
alert(`Создатель JavaScript ${jsFather}`);

//задание 4
let x = Number(10);
let y = Number(2);
alert(`${x} + ${y} = ${x + y}`);
alert(`${x} - ${y} = ${x - y}`);
alert(`${x} * ${y} = ${x * y}`);
alert(`${x} / ${y} = ${x / y}`);

//задание 5
let exponentiation = Number(2**5);
alert(`2 в степени 5 = ${exponentiation}`)

//задание 6
let c = Number(9);
let b = Number(2);
alert(`Остаток деления ${C} на ${b} = ${c % b}`);

//задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//задание 8
let age = prompt(Number('Сколько вам лет?'));
alert(`Вам ${age} лет.`);

//задание 9
const user = {
    name: String('Valera'),
    age: Number(25),
    isAdmin: Boolean(true),
    }

//задание 10
let yourName = prompt(String('Как вас зовут?'));
alert(`Привет ${yourName}!`)

//Доп задание
let number = prompt(Number('Введите число'));
let number1 = Number(number * 2);
let number2 = Number(number1 + 10);
let number3 = Number(number2 / 2);
let number4 = Number(number3 - number);
alert(`${number} * 2 = ${number1}
    ${number1} + 10 = ${number2}
    ${number2} / 2 = ${number3}
    ${number3} - ${number} = ${number4}
    ответ всегда равен 5 :)`)