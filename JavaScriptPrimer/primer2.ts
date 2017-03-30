// let myData = new Object();
// myData.name = "Adams";
// myData.weather = "sunny";
// console.log("Hello " + myData.name + ".");
// console.log("Today is " + myData.weather + ".");


// let myData2 = {
//     name: "Adam",
//     weather: "sunny"
// };
// console.log("Hello " + myData2.name + ".");
// console.log("Today is " + myData2.weather + ".");



// Defining Class Getter and Setter Properties
class MyClass {
    _name: string;
    _weather: string;

    constructor(name, weather) {
        this._name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `Today is ${this._weather}.`;
    }

    printMessages() {
        console.log("Hello " + this._name + ". ");
        console.log(this.weather);
    }
}
// let myData3 = new MyClass("Jeong", "windy");
// myData3.printMessages();


// using class inheritance
class MySubClass extends MyClass {
    _city: string;

    constructor(name, weather, city) {
        super(name, weather);
        this._city = city;
    }

    printMessages() {
        super.printMessages();
        console.log(`You are in ${this._city}.`);
    }
}
let myData4 = new MySubClass("Jeong", "shinny", "Sterling");
myData4.printMessages();