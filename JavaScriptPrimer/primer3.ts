import {Name, WeatherLocation} from "./modules/NameAndWeather";
import {Name as OtherName} from "./modules/DuplicateName";      // resolving duplciate classes with Alias

let name = new Name("Jeong", "Park");
let loc = new WeatherLocation("raining", "London");
let other = new OtherName();

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);




import * as NameAndWeatherLocation from "./modules/NameAndWeather";     //importing all the types in a modules

let allName = new NameAndWeatherLocation.Name("Jeong", "Park");
let allWeather = new NameAndWeatherLocation.WeatherLocation("raining", "Londdon");

console.log(allName.nameMessage);
console.log(allWeather.weatherMessage);