const input = document.getElementById('input')
const result = document.getElementById('result')

const enterButton = document.getElementById('enter')
enterButton.addEventListener('click', () => {
    if (!input.value) {
        return
    }
    result.innerHTML += getLetter(input.value)
    input.value = ""
})

input.addEventListener('input', () => {
    setTimeout(() => {
        const value = getLetter(input.value)
        input.value = value
    }, 2000)
})

function getLetter(value) {
    return keyboard[value] || ""
}

function addButtonToInput(button) {
    input.value += button.value
}

function cleanInput() {
    input.value = ""
}

function cleanResult() {
    result.innerHTML = ""
}

const keyboard = {
    "2": "a",
    "22": "b",
    "222": "c",
    "3": "d",
    "33": "e",
    "333": "f",
    "4": "g",
    "44": "h",
    "444": "i",
    "5": "j",
    "55": "k",
    "555": "l",
    "6": "m",
    "66": "n",
    "666": "o",
    "7": "p",
    "77": "q",
    "777": "r",
    "7777": "s",
    "8": "t",
    "88": "u",
    "888": "v",
    "9": "w",
    "99": "x",
    "999": "y",
    "9999": "z",
}