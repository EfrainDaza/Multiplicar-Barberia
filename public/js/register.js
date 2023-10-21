window.addEventListener("load", function(){
    let formulario = document.querySelector("formularios");
    
    formulario.addEventListener("submit", function (event){
        event.preventDefault(); // para que no se envie todos los datos sin antes validar!
        
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email")
        let domicilio = document.getElementById("domicilio")
        let Contrasenia = document.getElementById("contrasenia");
        
    })
})