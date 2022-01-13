let arrayOne = [
    [0,"0"],[1,"один"],[2,"два"],[3,"три"],[4,"четыре"],[5,"пять"],[6,"шесть"],[7,"семь"],[8,"восемь"],[9,"девять"],[10,"десять"],
     [11,"одиннадцать"],[12,"двенадцать"],[13,"тринадцать"],[14, "четырнадцать"],[15, "пятнадцать"],[16,"шестнадцать"],[17,"семнадцать"],
    [18,"восемнадцать"],[19,"девятнадцать"],
];

let arrayTwo = [
    [2,"двадцать"],[3,"тридцать"],[4,"сорок"],[5,"пятьдесят"],[6,"шестьдесят"],[7,"семьдесят"],[8,"восемьдесят"],[9,"девяносто"],
];

let arrayThree = [
    [1,"сто"],[2,"двести"],[3,"триста"],[4,"четыреста"],[5,"пятьсот"],[6,"шестьсот"],[7,"семьсот"],[8,"восемьсот"],[9,"девятьсот"],
];

let letterAnswer = "";
let num1;
let num2;
let num3;
let num4;
let num5;

let forIt = function (array,test) {
    for ( let i = 0; i < array.length; i++) {
        if ( test == array[i][0]) {
        letterAnswer = letterAnswer + array[i][1] + " ";
        };
    };
};

let answerNumber =prompt("Введите число!");
if ( answerNumber < 0) {
    letterAnswer =letterAnswer + "минус" + " ";
};

if ( 0 <= answerNumber && answerNumber < 20) {
    forIt(arrayOne,answerNumber);
    alert("Вы ввели : " + letterAnswer);
} else if (20 <= answerNumber && answerNumber < 99) {
    num1 = parseInt(answerNumber.charAt(0));
    forIt(arrayTwo,num1);
    num2 = answerNumber%10;
    forIt(arrayOne,num2);
    alert("Вы ввели : " + letterAnswer);  
} else if ( 100 <= answerNumber && answerNumber <=999) {
    num3 = parseInt(answerNumber.charAt(0));
    forIt(arrayThree,num3);
    num4 = parseInt(String(answerNumber%100).charAt(0));
    forIt(arrayTwo,num4);
    num5 =parseInt(String(answerNumber%100).charAt(1));
    forIt(arrayOne,num5);
    alert("Вы ввели : " + letterAnswer);
};
