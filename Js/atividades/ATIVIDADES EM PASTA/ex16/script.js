function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'nao da pra conta'
        //window.alert('TA ERRADO')
       
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p =Number(passo.value)
        if(p <= 0){
        window.alert('passo invalido, considerando passo 1')
        p = 1
        }
        if(i <f) {
// contagem crescente
        for(let c = 1; c <=f ; c += p){
            res.innerHTML += ` ${c} \u{1F449} \u{1F44C} `
        }
    } else {
        for(let c = i; c >=f;c -=p){
            res.innerHTML += `${c} \u{1F449} \u{1F44C} `
        }

        }
        res.innerHTML += `\u{1F4A6}`
    }
}