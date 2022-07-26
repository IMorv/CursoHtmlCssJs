function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e9c19f'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#f28b00'
    } else {
        //noite
        img.src= 'fotonoite.jpg'
        document.body.style.background ='#856aa5'
    }
}

