function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length ==0 || fano.value > ano) {
        window.alert('POE OS DADO CERTO BAHIANO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 6) {
        //bebe
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade >= 6 && idade < 12){
                //criança
                img.setAttribute('src', 'criançahomem.png')
            }else if (idade < 18){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultohomem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 6) {
                //bebe
                img.setAttribute('src', 'bebemulher.png')
                    } else if (idade >= 6 && idade < 12){
                        //criança
                        img.setAttribute('src', 'criançamulher.png')
                    }else if (idade < 18){
                        //jovem
                        img.setAttribute('src', 'jovemmulher.png')
                    }else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultamulher.jpg')
                    }else {
                        //idoso
                        img.setAttribute('src', 'velhamulher.png')
                    }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}