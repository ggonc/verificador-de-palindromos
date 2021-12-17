function verificar(){
    let frase = document.getElementById("inputFrase").value;
    let resultado = document.getElementById("resultado");

    let fraseReversa = frase.split("").reverse().join("");

    if (frase !== ""){
        if (frase === fraseReversa){
            resultado.innerHTML = "É palíndromo";
        } else {
            resultado.innerHTML = "Não é palíndromo";
        }
    } else {
        alert("Informe uma frase!");
    }
}