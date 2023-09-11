const itemCambioColor= document.getElementById("itemCambioColor");
const btnCambioColor=document.getElementById("btnCambioColor");

let colores=["gris","celeste", "rojo"]
let contador=0;

btnCambioColor.addEventListener("click", (e) => {
    itemCambioColor.classList.remove(colores[contador]);

    contador++;

    if (contador === colores.length) {
        contador = 0;
    }

    itemCambioColor.classList.add(colores[contador]);

    itemCambioColor.innerHTML=e.target.parentElement.children[0].classList[1]
})