console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var myFunc = function (name, weather) {
    console.log('This is a statement');
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc("Jeong", "sunny");
var defaultFunc = function (name, weather) {
    if (weather === void 0) { weather = "rainy"; }
    console.log("Hello " + name);
    console.log("It is " + weather + " today");
};
defaultFunc("Jeong");
var restParamFunc = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Args: " + extraArgs[i]);
    }
};
restParamFunc("Jeong", "gloomy", "one", "two", "Three");
// using functions as argument to other functions
var otherFunc = function (nameFunc) {
    return ("Hello " + nameFunc() + ".");
};
console.log(otherFunc(function () {
    return "Jeong";
}));
// using arrow functions
var arrowFunc = function (nameFunc) { return ("Hello " + nameFunc() + "."); };
var printName = function (nameFunc, printFunc) { return printFunc(arrowFunc(nameFunc)); };
printName(function () { return "Jeong"; }, console.log);
// template strings
var templateFunc = function (weather) {
    var msg = "It is " + weather + " today";
    console.log(msg);
};
templateFunc("awesome");
// array enumeration
var myArray = [100, "Jeong", true];
myArray.forEach(function (value, index) { console.log("Index " + index + ": " + value); });
// built-in array methods
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products.filter(function (item) { return item.stock > 0; }).reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
