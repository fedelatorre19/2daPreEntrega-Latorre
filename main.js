let rutinaEjercicios = [];

let continuar = true;
let nombre = prompt("Ingrese su nombre:");

while (continuar) {
    let ejercicio = prompt("Ingrese el ejercicio realizado:");
    let peso = Number(prompt("Ingrese el peso utilizado en kg:"));
    let series = Number(prompt("Ingrese la cantidad de series:"));
    let repeticiones = Number(prompt("Ingrese la cantidad de repeticiones hechas:"));

    rutinaEjercicios.push({
        ejercicio,
        peso,
        series,
        repeticiones
    });

    const respuesta = prompt("¿Desea ingresar otro ejercicio? (Sí/No)")
    continuar = (respuesta === "sí" || respuesta === "si" || respuesta === "Sí" || respuesta === "Si" || respuesta === "S" || respuesta === "s");
}

let mensaje = `Rutina de ${nombre}: 
`;

for (let i = 0; i < rutinaEjercicios.length; i++) {
    const { ejercicio, peso, series, repeticiones } = rutinaEjercicios[i];
    mensaje += `Ejercicio: ${ejercicio}, Carga: ${peso} kg, Series: ${series}, Repeticiones: ${repeticiones}`;
}

alert(mensaje);

