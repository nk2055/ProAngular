console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");


let myFunc = function(name, weather) {
    console.log('This is a statement');
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc("Jeong", "sunny");


let defaultFunc = function(name, weather="rainy") {
    console.log("Hello " + name);
    console.log("It is " + weather + " today");
};
defaultFunc("Jeong");


let restParamFunc = function(name, weather, ...extraArgs){
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i=0; i<extraArgs.length; i++) {
        console.log("Extra Args: " + extraArgs[i]);
    }
};
restParamFunc("Jeong", "gloomy", "one", "two", "Three");


// using functions as argument to other functions
let otherFunc = function(nameFunc) {
    return ("Hello " + nameFunc() + ".");
};
console.log(otherFunc(function(){
    return "Jeong";
}));


// using arrow functions
let arrowFunc = (nameFunc) => ("Hello " + nameFunc() + ".");
let printName = (nameFunc, printFunc) => printFunc(arrowFunc(nameFunc));
printName(function() { return "Jeong" }, console.log);


// template strings
let templateFunc = function(weather) {
    let msg = `It is ${weather} today`;
    console.log(msg);
}
templateFunc("awesome");


// array enumeration
let myArray = [100, "Jeong", true];
myArray.forEach((value, index) => { console.log("Index " + index + ": " + value)} );


// built-in array methods
let products = [
    { name: "Hat", price: 24.5, stock: 10},
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
let totalValue = products.filter(item => item.stock > 0).reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("Total value: $" + totalValue.toFixed(2));