        function comprarLista(event) {
            event.preventDefault(); //impedir recarregar página NÃO ESQUEÇA

            const produtos = document.querySelector("#produtos").value;

            const lista = document.querySelector("#lista");

            const produtoLi = "<li>" + produtos + "</li>"; //elemento dinâmico.
            lista.innerHTML = lista.innerHTML + produtoLi;
            console.log(lista)
        }