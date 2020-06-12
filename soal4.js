function change() {
    let words = document.getElementById("userInput").value;
    const changer = (words) => words.toLowerCase();
    document.getElementById("display").innerHTML = changer(words);
}
