let arrayOne = [
    "0","один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять",
     "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать",
     "восемнадцать","девятнадцать",
];

let arrayTwo = [
    "двадцать", "тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто",
];

let arrayThree = [
    "сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот",
];

let letterAnswer = "";
let num1;
let num2;
let num3;
let num4;
let num5;

let forIt = function (array,num) {
    for ( let i = 0; i < array.length; i++) {
        if ( num == i) {
        letterAnswer = letterAnswer + array[i];
        };
    };
};

let answerNumber = prompt("Введите число!");
if ( answerNumber < 0) {
    letterAnswer =letterAnswer + "минус" + " ";
};

if ( 0 <= answerNumber < 20) {
    forIt(arrayOne,answerNumber);
};

if (20 <= answerNumber <= 99) {
    num1 = parseInt(String(answerNumber).charAt(0));
    for ( let j = 0; j < arrayTwo.length; j++) {
        if ( num1 == j) {
            letterAnswer = letterAnswer + arrayTwo[j-2] + " ";
        };
    };
    num2 = parseInt(String(answerNumber%10).charAt(0));
    forIt(arrayOne,num2);
};

if ( 100 <= answerNumber <=999) {
    letterAnswer = "";
    num3 = parseInt(String(answerNumber).charAt(0));
    alert ("Выбираем " + num3);
    for ( let a = 0; a < arrayThree.length; a++) {
        if ( num3 == a) {
            letterAnswer = letterAnswer + arrayThree[a-1];
        }
    };
    num4 = parseInt(String(answerNumber%100).charAt(0));
    alert ("Выбираем " + num4);
    for ( let j = 0; j < arrayTwo.length; j++) {
        if ( num4 == j) {
            letterAnswer = letterAnswer + " " + arrayTwo[j-2] + " ";
        };
    }; 
    num5 =parseInt(String(answerNumber%100).charAt(1));
    alert ("Выбираем " + num5);
    forIt(arrayOne,num5);
};
alert("Вы ввели : " + letterAnswer);