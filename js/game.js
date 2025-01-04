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