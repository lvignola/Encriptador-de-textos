const textArea = document.querySelector(".cuadro_texto");
const mensaje = document.querySelector(".input_tarjeta");
const botonCopiar = document.querySelector(".boton_copiar_texto");
    

     //La letra "e" es convertida para "ercal"//
    //La letra "i" es convertida para "irtes"//
    //La letra "a" es convertida para "alis"//
    //La letra "o" es convertida para "oper"//
    //La letra "u" es convertida para "usta"//

    function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.textContent = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        mensaje.classList.add("texto-encriptado");
        ajustarTamañoTarjeta();
        mostrarBotonCopiar();
    }

    function encriptar(stringEncriptada){
        let palabraSecreta = [["e","erc"],["i","irtes"],["a","alis"],["o","oper"],["u","usta"]];
        stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < palabraSecreta.length; i++){
        if(stringEncriptada.includes(palabraSecreta[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(palabraSecreta[i][0], palabraSecreta[i][1])
        }
    
    }
       return stringEncriptada; 
    }

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.textContent = textoEncriptado
        textArea.value = "";
       
    }
    
    function desencriptar(stringDesencriptada){
        let palabraSecreta = [["e","erc"],["i","irtes"],["a","alis"],["o","oper"],["u","usta"]];
        stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < palabraSecreta.length; i++){
        if(stringDesencriptada.includes(palabraSecreta[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(palabraSecreta[i][1], palabraSecreta[i][0])
        }
    
    }
       return stringDesencriptada; 
    
}

function mostrarBotonCopiar() {
    botonCopiar.style.display = "block";
}

function ajustarTamañoTarjeta() {
    const cuadroTexto = document.querySelector(".cuadro_texto");
    const tarjetaEncriptada = document.querySelector(".tarjeta_encriptada");

    // Obtener el ancho y alto de .cuadro_texto
    const ancho = cuadroTexto.offsetWidth;
    const alto = cuadroTexto.offsetHeight;

    // Aplicar el ancho y alto a .tarjeta_encriptada
    tarjetaEncriptada.style.width = `${ancho}px`;
    tarjetaEncriptada.style.height = `${alto}px`;
}

function copiarTexto() {
    const mensaje = document.querySelector(".input_tarjeta");

    navigator.clipboard.writeText(mensaje.textContent)
            .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}