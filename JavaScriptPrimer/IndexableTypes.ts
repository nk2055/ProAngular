import {TempConverter} from "./tempConverter"

let cities: {[index: string]: [string, string]} = {};

cities["London"] = ["raining", TempConverter.convertFtoCAny("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoCAny("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoCAny("23")];

for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}