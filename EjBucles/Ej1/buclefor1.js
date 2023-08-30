let numeroingresado=Number(prompt("Ingrese un número de 1 a 100, por favor."));
if(numeroingresado>0 && numeroingresado<=100){
    for (let i = numeroingresado; i > 0; i--) {
        console.log(i);
    }
}else{
    alert("Ingresó un numero incorrecto. Adios!");
}