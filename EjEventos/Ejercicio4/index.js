let dolar=4016.83
let peso=0.00025
let dolares=document.getElementById("dolares")
let pesos=document.getElementById("pesos")
let btnConvertir= document.getElementById("convertir")
let btnReset= document.getElementById("reset")

btnConvertir.addEventListener('click', ()=>{
    let textoDolar=dolares.value
    let textoPeso=pesos.value

    if(textoDolar){
        pesos.value=textoDolar*dolar;
    }else{
        dolares.value=textoPeso*peso;
    }
})

btnReset.addEventListener('click',()=>{
    dolares.value=""
    pesos.value=""
})

