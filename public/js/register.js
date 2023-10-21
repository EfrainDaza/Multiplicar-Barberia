window.addEventListener("load", function(){
    let formulario = document.querySelector(".formularios");
    
    formulario.addEventListener("submit", function (event){
        //event.preventDefault(); // para que no se envie todos los datos sin antes validar!
        
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email")
        let domicilio = document.getElementById("domicilio")
        let contrasenia = document.getElementById("contrasenia");
        let confirContra = document.getElementById("confirContra");
        
        const errores = [];

        if(nombre.value == ""){ // el value te trae la informacion del form
            errores.push("debe completar el campo de Nombre")
        }else if (nombre.value.length < 3){
            errores.push("el campo debe tener al menos 3 caracteres")
        }

        if(apellido.value == ""){
            errores.push("debe completar el campo de Apellido")
        }else if (apellido.value.length < 3){
            errores.push("el campo debe tener al menos 3 caracteres")
        }

        if(email.value == ""){
            errores.push("debe completar el campo de E-mail")
        }else if (email.value.length < 3){
            errores.push("completar con un E-mail valido")
        }

        if(domicilio.value == ""){
            errores.push("debe completar el campo de Domicilio")
        }else if (domicilio.value.length < 3){
            errores.push("el campo debe tener al menos 3 caracteres")
        }

        if(contrasenia.value == ""){
            errores.push("debe completar el campo de Contraseñia")
        }else if (contrasenia.value.length < 5){
            errores.push("el campo debe tener al menos 5 caracteres")
        }

        if(confirContra.value.length == ""){
            errores.push("debe completar el campo confirmar contraseña")
        }else if(confirContra.value.length != confirContra.value.length){
            errores.push("deben coincidir las contraceñas")
        }
        

        if(errores.length > 0){ // si nuestro form esta vacio

            event.preventDefault(); // no envia ningun dato hasta que se valide
          
            let ulErrores = document.querySelector(".errores ul"); // capturamos la lista donde vamos a imprimir los errores
            ulErrores.innerHTML = ` `; // para que no se repitan los msj de error, pasamos un string vacio
            errores.forEach(error => { // recorre los errores del form
            ulErrores.innerHTML += `<li>${error}</li>`
            });
        }/*else{
            ulErrores.innerHTML = ` `
            Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
            ).then(()=>{
            formulario.submit() //se submiteaa, se sube toda la informacion a la base de datos o JSON   
            })
        }*/

    })
})