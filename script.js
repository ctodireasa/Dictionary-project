let dictionary = []

function saveNewWord() {
    let word = document.getElementById("dictionary")
    dictionary.push(word.value)
    word.value = ""
}

function verifyIfWordExists() {
    let wordToFind = document.getElementById("dictionary")
    let wordsToVerify = document.getElementById("wordsToVerify")
    if (dictionary.indexOf(wordToFind.value) == -1) {
        wordsToVerify.innerHTML = "DOES NOT EXISTS"
    } else {
        wordsToVerify.innerHTML = "EXISTS"
    }
}