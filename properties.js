const shoppingCart ={
    book :1,
    mouse: 3,
    keyboard :2,
    T_shirt : 30,
    bag : 1,
    shoes : 1,
    pen : 24
}


var penCount = shoppingCart.pen;
// console.log(penCount)

var T_shirtCount = shoppingCart['T_shirt'];
// console.log(T_shirtCount)

const properties = Object.keys(shoppingCart);
// console.log(properties)

const propertiesValues =Object.values(shoppingCart);
// console.log(propertiesValues)

var propertyName ='mouse';

var propertiesValue = shoppingCart[propertyName];
// console.log(propertiesValue)


// property set 
shoppingCart.mouse = 30;
console.log(shoppingCart)
shoppingCart['mouse'] = 60;
console.log(shoppingCart)
shoppingCart[propertyName] = 90;
console.log(shoppingCart);