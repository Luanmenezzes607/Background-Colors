function trocarCor(cor){
    document.body.style.background= cor
}

function gerarCor(){
    const vermelho = Math.floor(Math.random() * (255-1) + 1)
    const verde = Math.floor(Math.random() * (255-1) + 1)
    const amarelo = Math.floor(Math.random() * (255-1) + 1)
    
    document.body.style.background = `rgb(${vermelho}, ${verde}, ${amarelo})`
}

function corPersonalizada(){
    const inputValue = document.querySelector('#color').value

    trocarCor(inputValue)
    document.body.style.backgroundImage = 'none'
}

function adicionarImagem(imagem){
    const reader = new FileReader()

    reader.onload = function(evento){
        const imgUrl= evento.target.result

        document.body.style.backgroundImage = `url('${imgUrl}')`
    }

    reader.readAsDataURL(imagem)
}