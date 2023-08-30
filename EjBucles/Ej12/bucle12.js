let pares=0;
let impares=0;

do {
    num=Number(prompt("Ingresar un número"));
    if(num%2==0){
        pares+=num;
    }else{
        impares+=num;
    }
} while (num!=0);
console.log("Pares: "+pares);
console.log("Impares: "+impares);