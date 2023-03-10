"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.generateRandommNumber = void 0;
//var
const PI = 3.14;
exports.PI = PI;
//function
function generateRandommNumber() {
    return ~~(Math.random() * 100);
}
exports.generateRandommNumber = generateRandommNumber;
