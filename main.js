
dados = {}
function enviarParaJSON (){
    let nome = document.getElementById('nome').value
    let idade= document.getElementById('idade').value
    let tel= document.getElementById('telefone').value
    let email = document.getElementById('email').value
    dados.nome = nome
    dados.idade = idade
    dados.email = email
    dados.telefone = tel

    console.log(dados)
}