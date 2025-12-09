class Persona {

    constructor(nombre, apellido, f_nac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.f_nac = f_nac;
    }
    mostrar() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Fecha de nacimiento: " + this.f_nac);
    }
}
class Estudiante extends Persona {
    constructor(nombre, apellido, f_nac, carrera) {
        super(nombre, apellido, f_nac); 
        this.carrera = carrera;
    }

    mostrar() {
        super.mostrar(); 
        console.log("Carrera: " + this.carrera);
    }
}

const estudiante1 = new Estudiante("Jhonn", "Alan", "18/05/2005", "Ingeniería Sistemas");

estudiante1.mostrar();
