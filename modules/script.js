// console.log("Hej fra script");

import { getRandomNumber, sayHi } from "./utils.js";

sayHi("Sofie");

console.log(getRandomNumber(2));

import { $ } from "./utils.js";

$("h1").textContent = "Dette er en H1'er"