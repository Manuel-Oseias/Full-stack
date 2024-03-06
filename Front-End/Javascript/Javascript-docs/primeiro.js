let sms = document.querySelector("#texto")
let imagem = document.querySelector ( "#foto")
let data = new Date()
let hora = data.getHours()
sms.innerHTML = `Agora são ${hora}h de Moscovo`
imagem.innerHTML = "<img src = '../Imagens/logo.png'</img>"
if (hora >= 0 && hora <= 11){
    imagem.innerHTML = "<img src = '../Imagens/facebook.jpg'</img>"
} else if (hora >= 12 && hora <= 18){
    imagem.innerHTML = "<img src = '../Imagens/github.jpg'</img>"
} else{
    imagem.innerHTML = "<img src = '../Imagens/youtube.jpg'</img>"
}