const estudiante = {
    nombre: "Juan",
    apellido: "Perez",
    correo:"juan@gmail.com",
    telefono: ["123", "7273459", "121"],  
    estado: false,
    notas: {
        parcial1: 20,
        parcial2: 100,
        final: 50
    }
};

const promedio = (estudiante.notas.parcial1 +
                  estudiante.notas.parcial2 +
                  estudiante.notas.final) / 3;

const aprobado = promedio >= 51 ? "APROBADO" : "REPROBADO";

alert(
    "Nombre: " + estudiante.nombre +
    "\nApellido: " + estudiante.apellido +
    "\nTeléfonos: " + estudiante.telefono.join(", ") +
    "\nEstado: " + estudiante.estado +
    "\nParcial 1: " + estudiante.notas.parcial1 +
    "\nParcial 2: " + estudiante.notas.parcial2 +
    "\nFinal: " + estudiante.notas.final +
    "\nPromedio: " + promedio.toFixed(2) +
    "\nResultado: " + aprobado
);
