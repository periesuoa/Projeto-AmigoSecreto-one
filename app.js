//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validar entrada
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adicionar ao array e atualizar a lista visual
    amigos.push(nome);
    atualizarListaAmigos();
    
    // Limpar o campo de entrada
    input.value = '';
    input.focus();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="result-item">
            <span class="winner">Amigo Secreto: ${amigoSecreto}</span>
        </li>
    `;
}