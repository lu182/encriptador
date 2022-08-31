var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var area = document.querySelector(".area");  

var contenedorMunieco = document.querySelector(".container-munieco");
var contenedorH3 = document.querySelector(".container-h3");
var contenedorParrafo = document.querySelector(".container-parrafo");

var resultado = document.querySelector(".texto-resultado"); 


//Encriptar mensaje
function btnEncriptar() {
    if(area.value == ""){
        alert("Debes escribir el texto a encriptar");        
    }else{
        ocultarElementos();
        var textoEncriptado = encriptar(area.value);        
        resultado.textContent = textoEncriptado;            
        area.value = ""; 
    }    
}

function soloLetras(e){
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toString();
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

    var especiales = [8,13,32];
    var tecla_especial = false;    
    for(var i in especiales) {
    if(key == especiales[i]){
        tecla_especial = true;
        break;
    }
    }    

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingresar sólo letras");
        return false;
    }
}

//botón Copiar
function btnCopy() {
    navigator.clipboard.writeText(resultado.innerHTML);
    resultado.textContent = ""; 
    alert("Texto Copiado");    
}

//Ocultar
function ocultarElementos(){
    contenedorMunieco.classList.add("ocultar");
    contenedorH3.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}


function encriptar(msjeRecibido){
    var textoRecibido = msjeRecibido;
    var textoFinal = "";

    for(var i = 0; i < textoRecibido.length; i++){
        if(textoRecibido[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(textoRecibido[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(textoRecibido[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(textoRecibido[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(textoRecibido[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + textoRecibido[i];
        }
    }

    return textoFinal;
}

//Desencriptar:
document.getElementById("areaTexto").addEventListener("keyup", habilitarBoton);

function btnDesencriptar() {
    if(area.value == ""){
        alert("Debes colocar/pegar el texto a desencriptar");
    }else{
        ocultarElementos();    
    var textoEncriptado = desencriptar(area.value);        
    resultado.textContent = textoEncriptado;       
    area.value = ""; 
    } 
}

function habilitarBoton(){
    val = 0;
    if(area.value == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("btnApagado").disabled = false;
    }else{
        document.getElementById("btnApagado").disabled = true;
    }   
}

function desencriptar(msjeRecibido){
    var textoRecibido = msjeRecibido;
    var textoFinal = "";

    for(var i = 0; i < textoRecibido.length; i++){
        if(textoRecibido[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(textoRecibido[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(textoRecibido[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(textoRecibido[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(textoRecibido[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + textoRecibido[i];
        }
    }

    return textoFinal;
}

