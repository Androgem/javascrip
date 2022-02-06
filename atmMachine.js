let input = parseInt(prompt('Enter value'));

function atm(cash, fullMoney = 10000) {
    if (cash > fullMoney) {
        alert('Not enough money');
        return 'Not enough money'
    } else if (isNaN(cash)) {
        return 'Not valid number'
    } else {
        let result = fullMoney - cash;
        return result
    }
}

let cash = input;

let restMoney = atm(cash);
console.log(`Entered money is ${cash}; Money left : ${restMoney}`)
