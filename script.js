"use strict";


let money = prompt("Ваш бюджет на месяц?",''),
    time = prompt("Введите дату в формате YYYY-MM-DD",''),
    q1 = prompt("Введите обязательную статью расходов в этом месяце",''),
    q2 = prompt("Во сколько обойдется?",''),
    q3 = prompt("Введите обязательную статью расходов в этом месяце",''),
    q4 = prompt("Во сколько обойдется?",''),
    appData = {
        budget: money,
        timeData: time,
        expenses:  {
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

console.log(appData);
alert(appData.budget/30);
