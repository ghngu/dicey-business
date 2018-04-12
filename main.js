let container = document.getElementById('die-container');
let dieButton = document.getElementById('new-die');
let sumDice = document.getElementById('sum-dice');
let reRoll = document.getElementById('roll-all');
let diceArray = [];

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('die');
        this.roll()
        container.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let index = diceArray.indexOf(this);
            diceArray.splice(index, 1);
        })
    }
    roll() {
        let dieFace = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
        let val = Math.floor(Math.random() * 6);
        this.value = val + 1;
        this.div.innerHTML = dieFace[val];
    }
}

dieButton.addEventListener('click', insertDie);

reRoll.addEventListener('click', function () {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
})

sumDice.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < diceArray.length; i++) {
        sum += diceArray[i].value
    }
    alert(`The sum is ${sum}`)
});

function insertDie() {
    let dice = new Die();
    diceArray.push(dice);
}

function getSum(total, num) {
    return total + num;
}