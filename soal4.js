let words = prompt("Masukan Kata");

const changer = (words) => words.toLowerCase();

document.getElementById("demo4").innerHTML = changer(words);
