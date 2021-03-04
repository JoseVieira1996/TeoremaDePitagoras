
//Variável universal
let logo = window.document.getElementById('imagem')


//Mudança de imagem
function ladoA(){
    logo.setAttribute('src','./imagens/lado_a.gif')
}


function ladoB(){
    logo.setAttribute('src','./imagens/lado_b.gif')
}

function ladoC(){
    logo.setAttribute('src','./imagens/lado_c.gif')
}

function sair(){
    logo.setAttribute('src', './imagens/normal.gif')
}


