const a = Number(prompt("Введите первое число:"));
const b = Number(prompt("Введите второе число:"));
const c = Number(prompt("Введите третье число:"));

const max = Math.max(a, b, c);

console.log("Самое большое число:", max);


const age = Number(prompt("Введите свой возраст:"));

const ageCheck = age >= 18 && age <= 60;

console.log(ageCheck);


const username = "admin";
const password = "12345";

const user = prompt("Введите username:");
const pass = prompt("Введите password:");

if (user === username && pass === password) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}


const answer1 = "Бишкек";
const answer2 = "JavaScript";
const answer3 = "8";
const answer4 = "true";
const answer5 = "HTML";

let score = 0;

const user1 = prompt("1. Столица Кыргызстана?");
const user2 = prompt("2. Какой язык используется для веб-разработки?");
const user3 = prompt("3. Сколько будет 5 + 3?");
const user4 = prompt("4. Какое значение означает истину: true или false?");
const user5 = prompt("5. Как называется язык разметки веб-страниц?");

if (user1.toLowerCase() === answer1.toLowerCase()) {
    score++;
}

if (user2.toLowerCase() === answer2.toLowerCase()) {
    score++;
}

if (user3 === answer3) {
    score++;
}

if (user4.toLowerCase() === answer4) {
    score++;
}

if (user5.toLowerCase() === answer5.toLowerCase()) {
    score++;
}

console.log("Количество правильных ответов:", score);


const number1 = Number(prompt("Введите число:"));

if (number1 % 2 === 0 || number1 % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}


const sum = Number(prompt("Введите сумму покупки:"));

if (sum > 5000) {
    const result = sum * 0.9;
    console.log("Сумма со скидкой:", result);
} else {
    console.log("Сумма покупки:", sum);
}


const letter = prompt("Введите одну английскую букву:").toLowerCase();

const vowelCheck = ["a", "e", "i", "o", "u"].includes(letter);

console.log(vowelCheck);


const number2 = Number(prompt("Введите число:"));
const percent = Number(prompt("Введите процент:"));

const percentResult = number2 * percent / 100;

console.log("Результат:", percentResult);