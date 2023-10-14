const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento);
}) 

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    verificaItemExistente = itens.find(itens => itens.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(verificaItemExistente) {
        itemAtual.id = verificaItemExistente.id;
        atualizaElemento(itemAtual);
    }
    else{
        itemAtual.id = itens.length + 1;

        criaElemento(itemAtual);rificarificaItemExistenteItemExistente

        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    teste = document.querySelector("[data-id='"+ item.id +"']").innerHTML = item.quantidade;
}