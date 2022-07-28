function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let dSemana = document.getElementById('dSemana')
    let data = new Date()
    let hora = data.getHours()
    let diaSem = data.getDay()
    let minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos.padStart(2, '0')}`

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

    switch(diaSem){
        case 0:
            dSemana.innerHTML = `Hoje é Domingo`
            break
    
        case 1:
            dSemana.innerHTML = `Hoje é Segunda-feira`
            break
    
        case 2:
            dSemana.innerHTML = `Hoje é Terça-feira`
            break
    
        case 3:
            dSemana.innerHTML = `Hoje é Quarta-feira`
            break
    
        case 4:
            dSemana.innerHTML = `Hoje é Quinta-feira`
            break
    
        case 5:
            dSemana.innerHTML = `Hoje é Sexta-feira`
            break
        
        case 6:
            dSemana.innerHTML = `Hoje é Sábado`
            break
    
        default:
            console.log('[ERRO] Dia inválido!')    
            break
    }
}
