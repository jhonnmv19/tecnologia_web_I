function ejercicio2() {
    let salida = "";

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) salida += "FizzBuzz\n";
        else if (i % 3 === 0) salida += "Fizz\n";
        else if (i % 5 === 0) salida += "Buzz\n";
    }

    document.getElementById("resultado2").textContent = salida;
}
