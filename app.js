"use strict";
// class Car {
//     _year: number;
//     _model: string;
//     constructor(year: number, model: string ){
//         this._year = year;
//         this._model= model;
//     }
//     //Atributos
//     color: string = 'negro';
//     marca: string = 'Ford';
exports.__esModule = true;
//     //Metodos
//     arrancar(): string{ return "Arrancando !!!" }
//     frenar(): string { return "Estoy frenando !!" }
// }
// const auto = new Car(2010, 'Fiesta');
// console.log(auto.arrancar())
// console.log(auto.frenar())
// console.log(`Auto: ${auto.marca} ${auto._model}`)
// class Persona {
//     public _edad: number;
//     public _nombre: string;
//     private _apellido: string = '';
//     constructor(edad: number, nombre: string) {
//         this._edad = edad;
//         this._nombre = nombre;
//     }
//     set setApellido(apellido: string) {
//         this._apellido = apellido
//     }
//     get getApellido() {
//         return `Mi apellido es ${this._apellido}`
//     }
//     private saludar(): string {
//         return `Hola me llamo ${this._nombre} !!`
//     }
//     public ejecutarSaludo(): string {
//         return this.saludar()
//     }
// }
// const persona = new Persona(34, 'Julio')
// //persona.setApellido = 'Molina';
// persona.setApellido = "Molina Nunez";
// //console.log(persona.)
// console.log(persona.ejecutarSaludo())
// class Persona {
//     nombre: string = 'Julio Angel';
//     static apellido: string = 'Molina';
//     get devuelveNombre(): string {
//         return this.nombre;
//     }
//     static saludar(): string {
//         return `Mi apellido es ${this.apellido}`
//     }
// }
// const persona = new Persona
// console.log(Persona.saludar())
// //Clase Base
// class Mamifero {
//     private _patas: number;
//     private _color: string;
//     constructor(patas: number, color: string) {
//         this._patas = patas;
//         this._color = color;
//     }
//     set setColor(nuevoDato: string) { this._color = nuevoDato; }
//     get getPatas():string { return `Tengo ${this._patas} patas.` }
//     caminar(): string { return 'Caminando'; }
// }
// class Gato extends Mamifero {
//     _edad: number;
//     constructor(patas: number, color: string, edad: number) {
//         super(patas, color)
//         this._edad = edad
//     }
//     get getEdad(): string { return `Mi edad es ${this._edad}` }
// }
// const perro = new Mamifero(4, 'Blanco')
// const gato = new Gato(3, 'Negro', 7)
// console.log(perro.setColor = 'Amarillo')
// console.log(perro.getPatas)
// console.log(gato.getEdad)
// function testGeneric<tipo>(item: tipo): tipo {
//     return item
// }
// console.log(testGeneric<number>(4))
// function suma<tipo1, tipo2>(a: tipo1, b: tipo2): string {
//     return `Hola ${a} tienes ${b} a;os`
//     //return a;
// }
// console.log(suma<string, number>('Julio', 34))
var suma_1 = require("./suma");
console.log((0, suma_1.suma)(4, 9));
