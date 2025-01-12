console.log('Задание 1');
// Преобразовать строку 'js' в верхний регистр.
let stroc = 'Преобразовать строку "js" в верхний регистр.'
stroc = stroc.toUpperCase();
console.log(stroc);

console.log('Задание 2');
// Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы первого массива,
// которые начинаются со второй строки.
// Регистр символов не влияет на результат.
function finder(massive, text) {
    products.forEach((massive) => {
        if (massive.toLowerCase().startsWith(text.toLowerCase())) {
            const newMassive = massive; 
            console.log(newMassive);
        }
    });
}

const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'];
let milk = 'молоко';
finder(products, milk)

console.log('Задание 3');
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.
const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

console.log('Задание 4');
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

console.log('Задание 5');
// Создать функцию, которая выводит в консоль случайное число от 1 до 10
function GetRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}
console.log(GetRandomNumber());

console.log('Задание 6');
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
// Длина массива должна быть в два раза меньше переданного числа.
function GetRandomMassive(userNumber) {
    const result = [];
    let massiveLenght = Math.floor(userNumber / 2);
    
    for (let i = 0; i < massiveLenght; i++) {
        let randomNumber = Math.floor(Math.random() * userNumber) + 1;
        result.push(randomNumber);
     }
     return result;
}

console.log(GetRandomMassive(11));

console.log('Задание 7');
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomNumberInRange(min, max) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}
console.log(getRandomNumberInRange(2, 10));

console.log('Задание 8');
// Вывести в консоль текущую дату.
let date = new Date();
console.log(`Сегодня ${date.toLocaleDateString()}`);

console.log('Задание 9');
// Создать переменную currentDate, 
// хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
let formattedDate = currentDate.toLocaleDateString();
console.log(`Через 73 дня будет ${formattedDate}`);

console.log('Задание 10');
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
function formaterDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}
    Время: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}
console.log(formaterDate(new Date()));