//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//armazenar os nomes dos amigos na variavel 
let nomesAmigos=[];

function adicionarAmigo(){

    let nome = document.getElementById('amigo').value;
    
    if (nome === '') {
        alert('Por favor, insira um nome');
        return;
    }nomesAmigos.push(nome);
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';
}
function atualizarListaAmigos() {
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < nomesAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = nomesAmigos[i];
        lista.appendChild(itemLista);
        
    }
}
function sortearAmigo() {
    
    if (nomesAmigos.length === 0) {
        alert('Nenhum amigo foi adicionado.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length);
    let amigoSorteado = nomesAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

