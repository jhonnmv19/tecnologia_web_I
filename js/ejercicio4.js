function ejercicio4() {
    const lugarTuristico = {
        nombre: "Parque Acuático EvoSplash",
        ciudad: "Santa Cruz",
        precioEntrada: 50,
        horario: "09:00 - 18:00",
        calificaciones: [5, 4, 4, 3, 5],

        promedioCalificaciones() {
            const suma = this.calificaciones.reduce((a, b) => a + b, 0);
            return (suma / this.calificaciones.length).toFixed(2);
        },

        aplicarDescuento(porcentaje) {
            this.precioEntrada -= (this.precioEntrada * (porcentaje / 100));
        }
    };

    lugarTuristico.aplicarDescuento(20); // ejemplo

    const resultado =
        `Nombre: ${lugarTuristico.nombre}\n` +
        `Ciudad: ${lugarTuristico.ciudad}\n` +
        `Precio con descuento: ${lugarTuristico.precioEntrada} Bs\n` +
        `Promedio Calificaciones: ${lugarTuristico.promedioCalificaciones()}`;

    document.getElementById("resultado4").textContent = resultado;
}
