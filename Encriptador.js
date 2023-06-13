var textArea = document.querySelector(".textoGuia");
var mensaje = document.querySelector(".mensaje");



function boton_Uno(){
    var txtCifrado = encriptar(textArea.value);
    mensaje.value = txtCifrado;
    textArea.value = "";
    
    
}

function encriptar(encriptadarTxt){
    var claves = { "e": "enter",
                  "i": "imes" ,
                  "a": "ai"   ,
                  "o": "ober" ,
                  "u": "ufat" 
                };

    var salida = "";
    for(var i =0; i< encriptadarTxt.length; i++){
        var cifradoTxt = encriptadarTxt[i].toLowerCase();
        if(claves[cifradoTxt]){
            salida+= claves[cifradoTxt];

        }else {
            salida +=cifradoTxt;
        }
         
    }  
    
        
    
    return salida;
}

function boton_Dos(){
    var txtCifrado = desencriptar(textArea.value);
    mensaje.value = txtCifrado;
    textArea.value = "";
    
}

function desencriptar(densencriptadarTxt){
    var claves = [["e", "enter"], 
                  ["i", "imes" ],
                  ["a", "ai"   ],
                  ["o", "ober" ],
                  ["u", "ufat"]];

    densencriptadarTxt = densencriptadarTxt.toLowerCase()

    for(var i =0; i< claves.length; i++){
        if(densencriptadarTxt.includes(claves[i][1])){
            densencriptadarTxt= densencriptadarTxt.replaceAll(claves[i][1], claves[i][0]);
        }
    }
    return densencriptadarTxt;
}


function copiar(){
    var texto = document.querySelector(".mensaje");
    texto.select();
    texto.setSelectionRange(0, 9999);
    document.execCommand("copy");
    texto.value = "";
}

