
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