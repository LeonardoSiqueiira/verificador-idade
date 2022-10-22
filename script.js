function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('Dados incorretos, por favor verifique') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 58 ) {
                img.setAttribute('src', 'adultoh.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 58 ) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.          `
        res.appendChild(img)
        img.style.textAlign = 'center'
    }
}