// Code your solutions in this fil
function writeCards(array, event) {
    let thankYou = []
    for (let i = 0; i < array.length; i++) {
        thankYou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}

function countDown(num) {
    while (num > -1) {
        console.log(num--)
    }
}