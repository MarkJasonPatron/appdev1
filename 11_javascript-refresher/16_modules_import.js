import getGreeting from './15_modules_export.js';
import { info } from './15_modules_export.js';

console.log(getGreeting());
console.log(`Name: ${info.name}, Age: ${info.age}`);