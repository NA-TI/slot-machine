// 1. despost some money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winning
// 7. play again

const prompt = require("prompt-sync")();






const getDepositAmount = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
        while (true) {
            const bet = prompt("Enter the bet per line: ");
            const numberOfBet = parseFloat(bet);
    
            if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance /  lines) {
                console.log("Invalid bet, try again.");
            } else {
                return numberOfbet;
            }
        }
};

let balance = getDepositAmount();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

