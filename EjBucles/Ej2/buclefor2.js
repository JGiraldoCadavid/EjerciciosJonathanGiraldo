let numeroingresado=Number(prompt("Ingrese un número de 1 a 10, por favor."));
if(numeroingresado>0 && numeroingresado<=10){
    for (let i = 1; i <=10; i++) {
        console.log(`${i} x ${numeroingresado} = ${i*numeroingresado}`);
    }
}else{
    alert("Ingresó un numero incorrecto. Adios!");
}