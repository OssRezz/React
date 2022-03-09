//Expresion de clase
// const Rectangulo = class r {};

//Declaracion de clase
// class Rectangulo {}

//Clases declaras con class no tienen hoisting
class Rectangulo {}

//Hoisting
//Y esto es cuando tomamos variables definidas con var
//y funciones definidas con function
//y las lleva al comienzo del archivo
// console.log(Cuadradro);
// function Cuadradro() {}
// console.log(Rectangulo, Cuadradro);

// const r = new Rectangulo();

const r = new Rectangulo();

//Siempre que queramos instancionar una clase de manera declarativa debemos utilizar new
//Y siempre que utilicemos la clase en forma declarativa desde una instancia se va a ejecutar el constructor
class Chancho {
  propiedad = "mi propiedad";
  //# variable privada
  #hambre;
  constructor(estado = "feliz", hambre = false) {
    this.estado = estado;
    this.#hambre = hambre;
  }
  hablar() {
    console.log(`soy un chancho ${this.estado} ${this.#hambre ? "Con mucha hambre" : "Satisfecho"}`);
  }

  static comer() {
    console.log("Estoy comiendo");
  }
}

const feliz = new Chancho("feliz");
// console.log(feliz.__proto__.hablar);
// feliz.hablar();
// console.log(feliz);
const triste = new Chancho("triste");
// triste.hablar();
const nada = new Chancho();
// nada.hablar();
