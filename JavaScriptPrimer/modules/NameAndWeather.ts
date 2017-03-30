// Creating "Modules" using "export" keyword

export class Name{
    first: any;
    second: any;

    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation{
    weather: any;
    city: any;

    constructor(weather, city) {
        this.weather = weather;
        this.city = city;
    }

    get weatherMessage() {
        return `It is ${this.weather} in ${this.city}`;
    }
}