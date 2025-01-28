//Задание 1. Скрытие и показ текста
const buttonEl = document.querySelector('.btn');
const headingEl = document.querySelector('.heading');

buttonEl.addEventListener('click', () => {
    headingEl.classList.toggle('heading_invisible');
})

//Задание 2. Изменение стиля элемента
const textEl = document.querySelector('.text');
const buttonEl2 = document.querySelector('.btn2');

buttonEl2.addEventListener('click', () => {
    textEl.style.color = 'blue';
})

//Задание 3. Динамическое изменение текста
const buttonEl3 = document.querySelector('.btn3');

buttonEl3.addEventListener('click', () => {
    headingEl.textContent = 'Привет мир';
})

// Задание 4. Поиск и изменение элементов по классу
const descriptionEl = document.querySelectorAll('.description');
const buttonEl4 = document.querySelector('.btn4');
buttonEl4.addEventListener('click', () => {
    descriptionEl.forEach(element => {
        element.textContent = 'Измененный текст';
    });
})

// Задание 5. Работа с querySelectorAll
const descriptionEl2 = document.querySelectorAll('.description');
const buttonEl5 = document.querySelector('.btn5');
buttonEl5.addEventListener('click', () => {
    descriptionEl2.forEach(element => {
        element.textContent = 'Новый текст';
    });
})

//Задание 6. Добавление нового элемента в DOM
const buttonEl6 = document.querySelector('.btn6');
const contentEl = document.querySelector('.content');
buttonEl6.addEventListener('click', () => {
    const newContentEl = document.createElement('p');
    newContentEl.textContent = 'Новый абзац'
    newContentEl.classList.add('description')
    contentEl.appendChild(newContentEl)
})

//Задание 7. Удаление элемента
const buttonEl7 = document.querySelector('.btn7');

buttonEl7.addEventListener('click', () => {
    const textRemoveEl = document.querySelector('.description');
    textRemoveEl.remove();
})