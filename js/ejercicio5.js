class Hotel {
    constructor(nombre, ciudad, habitacionesDisponibles) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.habitacionesDisponibles = habitacionesDisponibles;
    }

    reservar(cantidad) {
        if (this.habitacionesDisponibles - cantidad < 0) {
            return "No hay habitaciones suficientes.";
        }
        this.habitacionesDisponibles -= cantidad;
        return `Reserva realizada. Habitaciones restantes: ${this.habitacionesDisponibles}`;
    }

    liberar(cantidad) {
        this.habitacionesDisponibles += cantidad;
        return `Habitaciones liberadas. Total ahora: ${this.habitacionesDisponibles}`;
    }

    info() {
        return `Hotel: ${this.nombre} - Ciudad: ${this.ciudad} - Disponibles: ${this.habitacionesDisponibles}`;
    }
}

function ejercicio5() {
    const hotel = new Hotel("Hotel Paraíso", "Cochabamba", 10);

    let texto = hotel.info() + "\n";
    texto += hotel.reservar(3) + "\n";
    texto += hotel.liberar(1) + "\n";
    texto += hotel.info();

    document.getElementById("resultado5").textContent = texto;
}
