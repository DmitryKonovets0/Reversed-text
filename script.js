document.getElementById("reverse-btn").addEventListener("click", function () {
    const inputWord = document.getElementById("input-word").value;
    const reversedWord = reverseWord(inputWord);
    document.getElementById("reversed-word").textContent = reversedWord;});
function reverseWord(word) {
    return word.split("").reverse().join("");
}
