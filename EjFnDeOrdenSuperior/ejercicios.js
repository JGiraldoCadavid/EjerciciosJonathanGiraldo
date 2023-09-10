//! Ejercicio 1

// const imprimirMensaje = mensaje => console.log(mensaje)

//! Ejercicio 2

// const crearMultiplicacion = (numero1, numero2) => numero1*numero2

//! Ejercicio 3

// const crearMultiplicacion = (numero1, numero2) => numero1*numero2

// const array=[12,2,33,4,5,6,72,8,9]

// let newArray= array.map(crearMultiplicacion);
// console.log(newArray)

//! Ejercicio 4
// function ordenarCervezaMasAlcoholica(cervezas){

//     return cervezas.sort((cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv);

// }

// function filtrarDiezCervezasMasAlcoholicas(cervezas){

//     ordenarCervezaMasAlcoholica(cervezas);
    
//     let cervFiltrada=cervezas.filter((cerveza, indice) => {
//         if(indice<10) return cerveza;   
//     } )

//     return cervFiltrada;
// }

// console.log(filtrarDiezCervezasMasAlcoholicas(beers));

//! Ejercicio 5

// function cervezasMenosAmargas(cervezas){

//     let cervezaConIbu=cervezas.filter(cerveza=>cerveza.ibu!=null)

//     cervezaConIbu.sort((cerveza1, cerveza2) => cerveza1.ibu - cerveza2.ibu)

//     let cervMenosAmarga=cervezaConIbu.filter((cerveza,indice) =>{ if(indice<10) return cerveza })

//     return cervMenosAmarga;
    
// }

// console.log(cervezasMenosAmargas(beers))

//! Ejercicio 6
// function obtenerCervezaPorNombre(cervezas, nombreCerveza){
//     return cervezas.find(cerveza => cerveza.name.toUpperCase() == nombreCerveza.toUpperCase())
// }

// console.log(obtenerCervezaPorNombre(beers,"Storm"))

//! Ejercicio 7
// function obtenerCervezaPorIbu(cervezas, valorIbu){
    
//     let cervPorIbu=cervezas.find(cerveza=> cerveza.ibu == valorIbu)
//     if(cervPorIbu){
//         return cervPorIbu
//     }else{
//         console.log(`No existe cerveza con un ibu de ${valorIbu}`)
//     }
// }

// console.log(obtenerCervezaPorIbu(beers,70))
// obtenerCervezaPorIbu(beers,41)
// console.log(obtenerCervezaPorIbu(beers,41.5))

//! Ejercicio 8
// function devolverPosicionCerveza(cervezas, nombreCerveza){
//     return cervezas.findIndex(cerveza => cerveza.name.toLowerCase() == nombreCerveza.toLowerCase())
// }

// console.log(devolverPosicionCerveza(beers,"Storm"))

//! Ejercicio 9
// function cervezasQueNoExcedenNivelEtilico(cervezas,nivelEtilico){
//     let cervezaNoExcNivEtilico = cervezas.filter(cerveza => {
//         if(cerveza.abv<=nivelEtilico) return cerveza;        
//     })

//     let cervPlantillaSolicitada=cervezaNoExcNivEtilico.map((cerveza) => {
//        return {
//         name: cerveza.name,
//         abv: cerveza.abv,
//         ibu: cerveza.ibu
//         }
//     })

//     return cervPlantillaSolicitada
// }

// console.log(cervezasQueNoExcedenNivelEtilico(beers,5))

//! Ejercicio 10
// function ordenarCervezasPorPropiedad(cervezas, propiedad, valorBooleano){
//     let filtroCervezas= cervezas.filter((cerveza,index)=>{
//         if(index>14&&index<=25){
//             return cerveza
//         }
//     })

//     return filtroCervezas.sort((cerveza1, cerveza2) =>{
//         if(valorBooleano==true){
//             if(isNaN(cerveza1[propiedad])){
//                 return cerveza1[propiedad].localeCompare(cerveza2[propiedad])
//             }else{
//                 return cerveza1[propiedad]-cerveza2[propiedad]
//             }
//         }else{
//             if(isNaN(cerveza1[propiedad])){
//                 return cerveza2[propiedad].localeCompare(cerveza1[propiedad])
//             }else{
//                 return cerveza2[propiedad]-cerveza1[propiedad]
//             }
//         }
//     } )
// }

// console.log(ordenarCervezasPorPropiedad(beers, "name", false))
// console.log(ordenarCervezasPorPropiedad(beers, "name", true))
// console.log(ordenarCervezasPorPropiedad(beers, "srm", false))
// console.log(ordenarCervezasPorPropiedad(beers, "ibu", true))

//! Ejercicio 11
// let contFila=document.getElementById("contFila")
// function crearFila(cerveza){
//  return `<tr>
//             <td class="border border-2 border-danger">${cerveza.name}</td>
//             <td class="border border-2 border-danger">${cerveza.abv}</td>
//             <td class="border border-2 border-danger">${cerveza.ibu}</td>
//         </tr>`
// }
// function renderizarTabla(cervezas, id){
//     let html=`
//     <tr class="m-2">
//         <th class="border border-2 border-danger bg-primary text-light">Name</th>
//         <th class="border border-2 border-danger bg-primary text-light">ABV</th>
//         <th class="border border-2 border-danger bg-primary text-light">IBU</th>
//     </tr>
//     `
//     cervezas.forEach(cerveza => {
//         html+=crearFila(cerveza)  
//     })
//     console.log(html)
//     id.innerHTML=html;
// }
// renderizarTabla(beers,contFila)