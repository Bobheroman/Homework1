function random() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userNumber = prompt('Введите число');
while (userNumber != randomNumber) {
    if (userNumber > randomNumber) {
        userNumber = prompt('Много');

    } else if (userNumber < randomNumber) {
        userNumber = prompt('Мало');
    }
}
alert('Угадал!');
}

console.log('Задание 1');
let smallerNumber = (a, b) => {
    if (a > b) {
    console.log(`${a} больше`);
    } else {
    console.log(`${b} больше`);
    }
 }
smallerNumber(8,6);


console.log('Задание 2');
let even = (a) => {
    if (a % 2 == 0) {
    console.log(`Число чётное`);
    } else {
    console.log(`Число не чётное`);
    }
 }
even(13);

console.log('Задание 3');
let squareNumber = (n) => {
    result = n ** 2;
    console.log(result);
    return result;
}
squareNumber(16);

console.log('Задание 4');
let age = (a = (prompt('Сколько вам лет'))) => {
    if (a < 0) {
    console.log('Вы ввели неправильное значение');
    } else if (a <= 12){
    console.log('Привет, друг!');
    } else if (a > 12) {
        console.log('Добро пожаловать!');
    }
 }
age();

console.log('Задание 5');
let multyNan = (a = (prompt('Введите первое число')), b = (prompt('Введите второе число'))) => {
    if (isNaN(a) || isNaN(b)) {
    console.log('Одно или оба значения не являются числом');
    } else {
        result = a * b;
        console.log(result);
        return result;
    }
 }
multyNan();

console.log('Задание 6');
let cubNumber = (a = (prompt('Введите число'))) => {
    if (isNaN(a)) {
    console.log('Переданный параметр не является числом');
    } else {
        result = a ** 3;
        console.log(`${a} в кубе равняется ${result}`);
        return result;
    }
 }
cubNumber();

console.log('Задание 7');
let getArea = (circle) => {
    return circle.radius ** 2 * Math.PI;
  };
  
  let getPerimeter = (circle) => {
    return circle.radius * 2 * Math.PI;
  };
  
  const circle1 = {
    name: 'circle1',
    radius: 15,
  };
  
  const circle2 = {
    name: 'circle2',
    radius: 20,
  };
  
  console.log(`Площадь ${circle1.name} равна ${getArea(circle1)}`);
  console.log(`Периметр окружности ${circle2.name} равен ${getPerimeter(circle2)}`);