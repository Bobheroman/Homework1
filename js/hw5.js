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
