const produtos = [{nome:"Refrigerante",quantidade: 3}];

function renderizarProdutos(){
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";

    for(let produto of produtos){
        console.log(produto)
        // cria o LI
        const produtoLi = document.createElement("li");

    // cria o texto
        const spanProduto = document.createElement("span");
        spanProduto.textContent = produto.nome;
        produtoLi.appendChild(spanProduto);

        const spanQuant = document.createElement("span");
        spanQuant.textContent = `(X${produto.quantidade})`
        produtoLi.appendChild(spanQuant);



        // botão remover
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = function() {
            produtoLi.remove();
        };
        produtoLi.appendChild(btnRemover);

        // botão alterar
        const btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Alterar";
        btnAlterar.onclick = function() {
            const novoProduto = prompt("Digite o novo nome");
            spanProduto.textContent = novoProduto;
        };
        produtoLi.appendChild(btnAlterar);

        // adiciona na lista
        lista.appendChild(produtoLi);
    }
}

renderizarProdutos()

function comprarLista(event) {
    event.preventDefault();

    const lista = document.querySelector("#lista");
    const input = document.querySelector("#produtos");
    const quant = document.querySelector("#quantidade")
    const produtoDigitado = input.value;
    const quantDigitado = quant.value
    const produtoNovo = {
        nome: produtoDigitado,
        quantidade: quantDigitado
    }
    
    produtos.push(produtoNovo);

    

    renderizarProdutos()
    // limpa input
    input.value = "";
}



    //InnetHTML.
    //const produtoLi = "<li>" + produtos + "</li>"; 
    //lista.innerHTML = lista.innerHTML + produtoLi;
    //console.log(lista)
