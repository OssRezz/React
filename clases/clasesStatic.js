// const r = new Rectangulo();

class Chancho {
    propiedad = "Mi propiedad";
    //Solo se pueden acceder a las propiedades privadas mediante una instancia de una clase  "const feliz = new Chancho('Feliz');"
    #nombre
    static estatico = 42;
    constructor(estado = "feliz", hambre = false) {
        this.estado = estado;
        this.#nombre = hambre;
    }

    hablar() {
        console.log(`Soy un chanco ${this.estado} y tengo mucha: ${this.nombre ? 'con mcuha hambre' : 'satisfecho'}`)
    }
    static comer() {
        //this me sirve para obtener el nombre de clase
        //Los metadoso estaticos solo pueden acceder a variables estaticas
        console.log(this.estatico, "Estoy comiendo");
    }
}

Chancho.comer();
const feliz = new Chancho('Feliz');