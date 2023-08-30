let numeroaingresar=Number(prompt("Ingrese un número de 1 a 100, por favor."));
if(numeroaingresar>0 && numeroaingresar<=100){
    for (let i = numeroaingresar; i > 0; i--) {
        console.log(i);
    }
}else{
    alert("Ingresó un numero incorrecto. Adios!");
}