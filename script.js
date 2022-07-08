function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=5 && hora < 12) {
        msg.innerHTML += `, tenha um bom dia!`
        img.src = './imgs/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >=12 && hora < 18) {
        msg.innerHTML += `, tenha uma boa tarde!`
        img.src = './imgs/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += `, tenha uma boa noite!`
        img.src = './imgs/noite.jpg'
        document.body.style.background = '#515154'
    }
}
