function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cChoise;
let options = ['<i class="far fa-hand-rock"></i>', '<i class="far fa-hand-paper"></i>', '<i class="far fa-hand-scissors"></i>']

console.log(getRandom(1, 10))