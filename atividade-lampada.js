
function ligar() {
    //pegar elemento de imagem
    const lampada = document.querySelector("#lampada")
    //trocar src para ligada
    lampada.src = "img/lampada-ligada.jpg"
    //trocar alt para ligada
    lampada.alt = "Lâmpada ligada"

    //pegar elemento button
    const botaoLigar = document.querySelector("#botao-ligar")
    //adicionar atributo disabled
    botaoLigar.disabled = true

    //pegar elemento button
    const botaoDesligar = document.querySelector("#botao-desligar")
    //remover atributo disabled
    botaoDesligar.disabled = false
}

function desligar() {

    const lampada = document.querySelector("#lampada")
    lampada.src = "img/lampada-desligada.jpg"
    lampada.alt = "Lâmpada desligada"


    const botaoDesligar = document.querySelector("#botao-desligar")
    botaoDesligar.disabled = true

    const botaoLigar = document.querySelector("#botao-ligar")
    botaoLigar.disabled = false
}

