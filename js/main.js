//Trás do HTML para o JavaScript, a tag form através do id "novoItem"
const form = document.getElementById("novoItem");

/*Escuta um evento de "submit" e quebra o comportamento padrão do 
formulário, que seria enviar os dados de volta para a página.*/
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(evento.target.elements['nome'].value);
    console.log(evento.target.elements['quantidade'].value);
})