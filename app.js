function encryptText() {
    let input = document.getElementById('mi__input').value;
    if (!input) {
        document.getElementById('id_container__salida_mensaje').style.display = 'block';
        document.getElementById('container__salida_result').style.display = 'none';
        return;
         }
    else{ 
        let encryptedText = input
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById('id_container__salida_mensaje').style.display = 'none';
        document.getElementById('container__salida_result').style.display = 'block';
        document.getElementById('result').innerHTML = `<p>${encryptedText}</p>`;
    }
}

function decryptText() {
    let input = document.getElementById('mi__input').value;
    if (!input) {
        document.getElementById('id_container__salida_mensaje').style.display = 'block';
        document.getElementById('container__salida_result').style.display = 'none';
        return;
         }
    else{    
        let decryptedText = input
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById('id_container__salida_mensaje').style.display = 'none';
        document.getElementById('container__salida_result').style.display = 'block';
        document.getElementById('result').innerHTML = `<p>${decryptedText}</p>`;
        }   
}

function copyText() {
   

    let result = document.getElementById('result').innerText;
    if (!result) {
        document.getElementById('id_container__salida_mensaje').style.display = 'block';
        document.getElementById('container__salida_result').style.display = 'none';
        return;
         }
    else{ 
         document.getElementById('id_container__salida_mensaje').style.display = 'none';
         document.getElementById('container__salida_result').style.display = 'block';
        navigator.clipboard.writeText(result)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(err => alert("Error al copiar texto: ", err));
    }
}
/*
function resizeInput() {
    const input = document.getElementById('autoResizeInput');
    const span = document.getElementById('hiddenSpan');
  
    // Sincroniza el contenido del input con el span
    span.textContent = input.value;
  
    // Ajusta la altura del input al contenido del span
    input.style.height = span.scrollHeight + 'px';
  }
  
  // Inicializar la altura en caso de que haya valor predefinido
  window.onload = function() {
    resizeInput();
  }*/