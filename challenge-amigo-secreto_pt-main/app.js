//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = function () {
        const nome = inputAmigo.value.trim();
        if (nome === "") {
            alert("Por favor, digite um nome válido.");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    };

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li class="sorteado">Sorteado: ${amigos[indiceSorteado]}</li>`;
    };

    window.limparLista = function () {
        amigos = [];
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }
});
