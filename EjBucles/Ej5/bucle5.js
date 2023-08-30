
let sumaTotal=20;
let contador=0;
let valorIngresado;

do {
    valorIngresado=Number(prompt("Ingrese un número para adivinar el valor."));
    
    contador++;

    if(valorIngresado>sumaTotal){
        console.log("El número ingresado es mayor que el secreto")
    }else if(valorIngresado<sumaTotal){
        console.log("El número ingresado es menor que el secreto")
    }else{
        console.log(`Acertaste! el número secreto era ${sumaTotal}, realizaste ${contador} intentos`)
    }
    
} while (sumaTotal!=valorIngresado);

