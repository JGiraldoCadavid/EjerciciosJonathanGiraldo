const datosPersonales={
    nombre: "Jonathan",
    apellido: "Giraldo",
    esColombiano: true,
    edad: 30,
    estudios: "tecnología"
}

for (const dato in datosPersonales) {
    console.log(datosPersonales[dato]);
}