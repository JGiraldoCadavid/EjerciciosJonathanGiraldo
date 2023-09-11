let itemTexto= document.getElementById("itemTexto")
let textoEscrito= document.getElementById("textoEscrito")
let borrado=document.getElementById("borrado")

textoEscrito.addEventListener('input', ()=>{
    let textoExtraido=textoEscrito.value
    itemTexto.innerText=textoExtraido
})

borrado.addEventListener('click', ()=>{
    textoEscrito.value=""
    itemTexto.textContent=""
})


    


    
