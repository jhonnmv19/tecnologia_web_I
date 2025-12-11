
function ejercicio1() {
    const valor = document.getElementById("tempInput").value;

    if (valor.trim() === "") {
        document.getElementById("resultado1").textContent = "⚠ Por favor ingrese una temperatura.";
        return;
    }

    const temp = parseFloat(valor);

    if (isNaN(temp)) {
        document.getElementById("resultado1").textContent = "⚠ Ingrese un número válido.";
        return;
    }

    let clima = "";

    if (temp >= -10 && temp <= 15) clima = "Frío";
    else if (temp >= 16 && temp <= 25) clima = "Templado";
    else if (temp >= 26 && temp <= 40) clima = "Calor";
    else clima = "Temperatura fuera de rango";

    document.getElementById("resultado1").textContent = clima;
}
