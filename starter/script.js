'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`;
//const private = 534;


function logger() {
    console.log(`My name is Josh`);
}

logger();

function fruitProccessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProccessor(2, 4);
console.log(appleOrangeJuice);


function bikeType(yamaha, honda) {
    const bike = `bikes are ${yamaha} yamaha and ${honda} honda`;
    return bike;
}

const yamahaBike = bikeType('exciter', 'winner');
console.log(yamahaBike);


function cryptoCurrency(bitcoin, ether) {
    const coin = `Crypto Coin holders with ${bitcoin} bitcoin and with ${ether} ether are more likely to profit in 2021`;
    return coin;
}

const bitcoin = cryptoCurrency(1, 5);
console.log(bitcoin);
console.log(bitcoin);
console.log(bitcoin);
console.log(bitcoin);

function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age2);


//Arrow function
const calcAge3 = birthYear => 2021 - birthYear;

const age3 = calcAge3(1997);
console.log(age3);

//Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1997, `Josh`));
console.log(yearsUntilRetirement(1966, `Steve`));
console.log(yearsUntilRetirement(1969, `Corrina`));
console.log(yearsUntilRetirement(2000, `Jeremy`));


function cutFruitPieces(fruit) {
    return fruit * 3;
};

function fruitProccessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProccessor(2, 3));