window.addEventListener("load", function(){

    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    
    abrir.addEventListener("click", () => {
        nav.classList.add("visible")
    })
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible")
    })

    /* carrusel*/

    const caja = document.querySelector(".caja");    
    const punto = document.querySelectorAll(".punto");

    punto.forEach((cadaPunto,i) => {
        punto[i].addEventListener("click",() => {
           let posicion = i
           let operacion = posicion * -16.66666666666667

           caja.style.transform = `translateX(${ operacion }%)`

           punto.forEach((cadaPunto,i) =>{
            punto[i].classList.remove("activo")
           })
           punto[i].classList.add("activo")
        })
    });

});





