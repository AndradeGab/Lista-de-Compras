function comprarLista(event) {
    event.preventDefault(); //impedir recarregar página NÃO ESQUEÇA

    const produtos = document.querySelector("#produtos").value;

    const lista = document.querySelector("#lista");

    //create element
    const produtoLi = document.createElement("li");
    produtoLi.textContent = produtos;
    lista.appendChild(produtoLi);

    produtoLi.onclick = function () {
        
        const resposta = confirm("Você tem certeza que quer remover o item?")
        console.log(resposta);
        if (resposta == true){
            produtoLi.remove();
        }

    }
    produtoLi.onmouseenter = function () {
        produtoLi.textContent = "✏️ " + produtoLi.textContent;
      }

      produtoLi.onmouseleave = function () {
        produtoLi.textContent = produtoLi.textContent.split(" ")[1];
      }
        

    //InnetHTML.
    //const produtoLi = "<li>" + produtos + "</li>"; 
    //lista.innerHTML = lista.innerHTML + produtoLi;
    //console.log(lista)
}