// Первый пункт задания
let money = prompt("Ваш бюджет на месяц?", "");
     time = prompt("Введите дату в формате YYYY-MM-DD", "");

// Второй пункт задания
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// Третий пункт задания
let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    question2 = prompt("Во сколько обойдется?", "");
appData.expenses.question1;
appData.expenses.question2;
// Четвертый пункт задания
alert(appData.budget / 30);