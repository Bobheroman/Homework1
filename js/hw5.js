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
    result = a;
    } else {
    result = b;
    }
    return `${result} больше`;
 }
console.log(smallerNumber(8,6));


console.log('Задание 2');
let even = (a) => {
    if (a % 2 == 0) {
    result = 'Число чётное';
    } else {
    result = 'Число не чётное';
    }
    return result;
 }
console.log(even(13));

console.log('Задание 3');
let squareNumberLog = (n) => {
    result = n ** 2;
    console.log(result);
}
squareNumberLog(16);
let squareNumberReturn = (n) => {
    result = n ** 2;
    return result;
}
console.log(squareNumberReturn(16));

console.log('Задание 4');
let age = (a = (prompt('Сколько вам лет'))) => {
    if (a < 0) {
    result = 'Вы ввели неправильное значение';
    } else if (a <= 12){
    result = 'Привет, друг!';
    } else if (a > 12) {
        result = 'Добро пожаловать!';
    }
    return result;
 }
alert(age());

console.log('Задание 5');
let multyNan = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
    result = 'Одно или оба значения не являются числом';
    } else {
        result = a * b;
    }
    return result;
 }
console.log(multyNan(12, 24));

console.log('Задание 6');
let cubNumber = (a = (prompt('Введите число'))) => {
    if (isNaN(a)) {
    return 'Переданный параметр не является числом';
    } else {
        result = a ** 3;
        return `${a} в кубе равняется ${result}`;
    }
 }
console.log(cubNumber());

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