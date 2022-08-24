function getAvarage(assignment1,assignment2,assingnment3){
    const total = assignment1 + assignment2 + assingnment3;
    const avarege = total / 3;
    return avarege;
}

const assignment1 = 48;
const assignment2 = 15;
const assignment3 = 30;

var myAvarage =getAvarage(48, 15, 30);
// console.log('My avarage to far',myAvarage);



function neetValue(money){
    const panjabiPrice = 1250;
    const quantity = money / 1250;
    return quantity;
}


const businessSetup = 300000;

const panjabi =neetValue(300000);
console.log('mot panjabi',panjabi ,'pes');

