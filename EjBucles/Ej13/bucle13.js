let numeros=[33,2,85,2,21,63,7,43,47,132];
let mayor=0;

for (const numero of numeros) {
    if(numero>mayor){
        mayor=numero;
    }
}

console.log("El número mayor es: "+mayor)