
function arifmetic() {
    let oneNumber = Math.floor(Math.random() * 100) + 1;
    let secondNumber = Math.floor(Math.random() * 100) + 1;
    const arithmeticProblems = ['+', '-', '*', '/'];
    let randomProblems = Math.floor(Math.random() * 3) + 1;

    if (arithmeticProblems[randomProblems] == '+') {
        result = oneNumber + secondNumber;

    } else if (arithmeticProblems[randomProblems] == '-') {
        if (oneNumber < secondNumber) {
            secondNumber = 2;
        }
        result = oneNumber - secondNumber;

    } else if (arithmeticProblems[randomProblems] == '*') {
        result = oneNumber * secondNumber;

    } else if (oneNumber % secondNumber != 0) {
        randomProblems = 2;
        result = oneNumber * secondNumber;

    } else {
        result = oneNumber / secondNumber;
    }
    userNumber = prompt(`Сколько будет ${oneNumber} ${arithmeticProblems[randomProblems]} ${secondNumber} = ?`);
    if (userNumber == result) {
        alert('Верно!');
    } else {
        alert(`Не верно ${oneNumber} ${arithmeticProblems[randomProblems]} ${secondNumber} = ${result}`);
    }
}

// Задание 1

const massive = [1, 5, 4, 10, 0, 3];
for (let i = 0; massive[i] != 10; i++) {

    console.log(massive[i]);
 }

 // Задание 2 
 // массив тот-же

 for (let i = 0; i < massive.length; i++) {
    if (massive[i] == 4) {
        console.log(`Индекс 4 = ${i}`);
    }
 }

//  Задание 3

const massive2 = [1, 3, 5, 10, 20];
console.log(massive2.join(' '));

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
const massive3 = [];
for (let i = 0; i < 3; i++) {
    massive3.push([]);
    for (let a = 0; a <= 3; a++) {
        massive3[i].push(1);
    }
 }
 console.log(massive3);

//  Задание 5
// Дан массив: 
// [1, 1, 1]
// . Добавьте в конец массива значения 2, 2, 2.

const massive4 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    massive4.push(2);
 }
 console.log(massive4);

//  Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a'из массива. Затем выведите массив.

const massive5 = [9, 8, 7, 'a', 6, 5];
massive5.sort();
massive5.pop();
console.log(massive5);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt.
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert
//  «Угадал», в противном случае — «Не угадал».

 const massive6 = [9, 8, 7, 6, 5];
 nom = parseFloat(prompt('Введите число'));
 if (massive6.includes(nom)) {
     alert('Угадал');
 } else {
     alert('Не угадал')
 }

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'
let strok = 'abcdef';
const massive7 = strok.split('');
massive7.reverse();
strok = massive7.join('');
console.log(strok);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]

const massive8 = [[1, 2, 3],[4, 5, 6]];
const result = []
for (let i = 0; i < massive8.length; i++) {
    for (let a = 0; a < massive8[i].length; a++) {
        result.push(massive8[i][a]);
    }
 }
 console.log(result);

//  Задание 10
//  Создайте массив с произвольными числами (диапазон от 1 до 10).
//  Переберите его с помощью цикла for.
//  В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

const massive9 = [1, 2, 3, 4, 5, 6, 9, 8, 7, 6, 5];
for (let i = 0; i < massive9.length; i++) {
    if ((i + 1) < massive9.length) {
        console.log(`${massive9[i]} + ${massive9[i + 1]} = ${massive9[i] + massive9[i + 1]}`);
    }
 }

//  Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function quadMassive(massive) {
    const result = [];
    for (let i = 0; i < massive.length; i++)
        result.push(massive[i]**2);
    return result;
}
console.log(quadMassive(massive9));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
console.log('Задание 12');

function lengthWords(massive) {
    const result = [];
    const string = massive.join(' ');
    const mainMassive = string.split(' ');

    for (let i = 0; i < mainMassive.length; i++) {
        result.push(mainMassive[i].length);
    }
    return result;
}

const massive10 = ['Создайте функцию', 'которая принимает на вход массив строк', 'а возвращает массив длины слов'];
console.log(lengthWords(massive10));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
const massive11 = [1, 2, -3, 4, -5, 6, 9, 8, -7, 6, -5]
function negativeNumbers(massive) {
    const result = [];
    for (let i = 0; i < massive.length; i++)
        if (massive[i] < 0) {
            result.push(massive[i]);
        }
    return result;
}
console.log(negativeNumbers(massive11));

// Задание 14
// Создайте массив, состоящий из 10 значений.
// Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива:
// исходный массив и массив с четными значениями.
console.log('Задание 14');
const massive12 = [];
const evenNumbers = [];
let randomNumber = 0;
for (let b = 0; b < 10; b++) {
    randomNumber = Math.floor(Math.random() * 10) + 0;
    massive12.push(randomNumber);

    if (randomNumber % 2 == 0 && randomNumber != 0) {
        evenNumbers.push(randomNumber);
    }
}
console.log(massive12);
console.log(evenNumbers);

// Задание 15
// Создайте массив, состоящий из 6 элементов. 
// Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

console.log('Задание 15');
const massive13 = [];
let summNumber = 0;
for (let b = 0; b < 6; b++) {
    randomNumber = Math.floor(Math.random() * 10) + 0;
    massive13.push(randomNumber);
    summNumber = summNumber + randomNumber;
}
let arithmeticMean = summNumber / 6;

console.log(`Среднее арифметическое чисел ${massive13} = ${arithmeticMean.toFixed(2)}`);
