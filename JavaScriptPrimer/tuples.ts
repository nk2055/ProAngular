import {TempConverter} from "./tempConverter";

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoCAny("38")]

console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);