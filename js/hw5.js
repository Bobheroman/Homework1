const user = {
    name: 'Валера',
    age: 23,
    city: 'Москва',
    getInfo() {
        console.log(`${user.name} живёт в ${user.city}`);
    }
}

user.getInfo();