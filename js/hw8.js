 console.log('Задание 1');

 const people1 = [
     { name: 'Глеб', age: 29 },
     { name: 'Анна', age: 17 },
     { name: 'Олег', age: 7 },
     { name: 'Оксана', age: 47 }
  ];
 
  console.log(people1.sort((a, b) => (
     a.age - b.age)));

console.log('Задание 2');

function filter(arr, ruleFunction) {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
         result.push(arr[i]);
      }
   }
   return result;
}

function isPositive(number) {
   return number > 0;
}
function isMale(person) {
   return person.gender === 'male';
}

    
console.log(filter([3, -4, 1, 9], isPositive));
    
const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people2, isMale));

console.log('Задание 3')
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату.
// Последней строкой должно выводиться сообщение «30 секунд прошло».
const timer = (deadline) => {
   const interval = setInterval(() => {
      let currentDate = new Date()
      console.log(currentDate.toLocaleDateString());
   }, 3000);

   setTimeout(() => {
   clearInterval(interval);
      console.log(`${deadline} секунд прошли!`)
   }, deadline * 1000)
};

timer(30);

console.log('Задание 4')
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию 
// delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
// setTimeout
// .

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});


console.log('Задание 5')
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
       if(cb) {  cb(); }
   }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя кроме опечатки с кавычками

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));
