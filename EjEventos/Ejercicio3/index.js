let peso= document.getElementById("peso")
let altura=document.getElementById("altura")
let btncalcular=document.getElementById("calcular")
let resultado=document.getElementById("resultado")

btncalcular.addEventListener('click',(e)=>{
    let valorPeso=Number(e.target.parentElement.children[5].value)
    let valorAltura=Number(e.target.parentElement.children[2].value)

    let valorAlturaMetros= valorAltura/100;
    let imc=(valorPeso/(valorAlturaMetros**2)).toFixed(2)

    resultado.value=imc

})
