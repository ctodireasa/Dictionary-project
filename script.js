let dictionary = []

function saveNewWord() {
    let word = document.getElementById("dictionary")
    dictionary.push(word.value)
    word.value = ""
}

function verifyIfWordExists() {
    let wordToFind = document.getElementById("dictionary")
    let messageBox = document.getElementById("messageBox")
    if (dictionary.indexOf(wordToFind.value) == -1) {
        messageBox.innerHTML = "DOES NOT EXISTS"
    } else {
        messageBox.innerHTML = "EXISTS"
    }
}