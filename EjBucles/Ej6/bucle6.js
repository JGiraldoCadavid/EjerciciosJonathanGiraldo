let valorIngresado=Number(prompt("Ingrese un número para obtener sus divisores."));

for (let i = 1; i <= valorIngresado; i++) {
    if(valorIngresado%i==0){
        console.log(valorIngresado/i)
    }
}

