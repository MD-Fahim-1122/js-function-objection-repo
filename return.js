function add(number1, number2){
    // console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var total = add(45, 15);
// console.log('total',total)


function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;

}
var myTaka = 150;
var singaras = bringSingara(myTaka);
// console.log('Eating singars', singaras);

function bringKitab(money){
    var kitabPrice = 300;
    var quantity = money / kitabPrice;
    return quantity;
}

var mybugged = 3000;
var kitabs =bringKitab(mybugged);
console.log('kitab ano', kitabs)