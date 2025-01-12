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

function arifmetic() {
    let oneNumber = Math.floor(Math.random() * 100) + 1;
    let secondNumber = Math.floor(Math.random() * 100) + 1;
    const arithmeticProblems = ['+', '-', '*', '/'];
    let randomProblems = Math.floor(Math.random() * 3) + 1;
    let result = 0;

    switch (arithmeticProblems[randomProblems]) {
        case '+':
            result = oneNumber + secondNumber;
            break;
        case '-':
            result = oneNumber - secondNumber;
            break;
        case '*':
            result = oneNumber * secondNumber;
            break;
        default:
            result = oneNumber / secondNumber;
    }

    userNumber = prompt(`Сколько будет ${oneNumber} ${arithmeticProblems[randomProblems]} ${secondNumber} = ?`);
    if (userNumber == result.toFixed(2)) {
        alert('Верно!');
    } else {
        alert(`Не верно ${oneNumber} ${arithmeticProblems[randomProblems]} ${secondNumber} = ${result.toFixed(2)}`);
    }   
}

function reversText() {
    let userText = prompt('Введите текст');
    const massive = userText.split('');
    massive.reverse();
    strok = massive.join('');
    alert(`${userText.toLowerCase()}\n ${strok.toLowerCase()}`)

}

function viktorina() {
    let userAnswers = 0;

    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    for (const i of quiz) {
        const answer = Number(prompt(`${i.question}\n${i.options[0]}\n${i.options[1]}\n${i.options[2]}\nВведите номер правильного ответа:`));

        if (answer === i.correctAnswer) {
            userAnswers++;
        }
    }
    alert(`Вмкторина законченна, вы ответили верно на ${userAnswers} из ${quiz.length} вопросов`)
}

function game() {
    const variants = ["камень", "ножницы", "бумага"];
    let randomVarint = variants[Math.floor(Math.random() * 3)];
    let userVarint = variants[Number(prompt(`1 ${variants[0]}\n2 ${variants[1]}\n3 ${variants[2]}\nВведите номер выбранной позиции:`)) - 1];

    if (userVarint == null) {
        alert('Некорректные данные');
    } else if (userVarint == randomVarint) {
        alert(`Вы выбрали : ${userVarint} \nКомпьютер выбрал : ${randomVarint} \nНичья!`);

    } else if (userVarint == 'камень' || randomVarint == 'ножницы') {
        alert(`Вы выбрали : ${userVarint} \nКомпьютер выбрал : ${randomVarint} \nВы победили!`);

    } else if (userVarint == 'ножницы' || randomVarint == 'бумага') {
        alert(`Вы выбрали : ${userVarint} \nКомпьютер выбрал : ${randomVarint} \nВы победили!`);

    } else if (userVarint == 'бумага' || randomVarint == 'камень') {
        alert(`Вы выбрали : ${userVarint} \nКомпьютер выбрал : ${randomVarint} \nВы победили!`);
        
    } else {
        alert(`Вы выбрали : ${userVarint} \nКомпьютер выбрал : ${randomVarint} \nКомпьютер победил!`);
    }
}