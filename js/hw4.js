console.log('Задание 1');
let i = 1;
while (i <= 2) {
    console.log('Привет');
    i++
}
console.log('Задание 2');
let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}

console.log('Задание 3');

let a = 7;
while (a <= 22) {
    if (a < 6) {
        a++;
        continue;
    }  
        console.log(a);
        a++;
    
}

console.log('Задание 4');
let obj = {
    Коля: '200',
    Вася : '300',
    Петя : '400',
}

for (let key in obj) {
    console.log(`${key}---зарплата ${obj[key]} долларов`);
}

console.log('Задание 5');

let num = 0;
for (let n = 1000; n >= 50; n /= 2) {
    num++;
    console.log(n);
}
console.log(`Всего циклов${num}`);


console.log('Задание 5');
let frayday = 6;
for (let i = 1; i <= 31; i++) {
    if (i === frayday || i === frayday + 7) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
        frayday = i;
    }
    
}