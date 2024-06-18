/*  OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
        passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
        passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        passo 3 - fazer aparecer o próximo cartão da lista
        passo 4 - buscar o cartão que esta selecionado e esconder

    OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
        passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
        passo 3 - fazer aparecer o cartão anterior da lista
        passo 4 - buscar o cartão que esta selecionado e esconder   */

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

/*  OBJETIVO 1  */
const btnAvancar = document.getElementById("btn-avancar"); //passo 1 

btnAvancar.addEventListener("click", function(){ //passo 2 

    if(cartaoAtual === cartoes.length - 1) {
        cartaoAtual = -1;
    }

    esconderCartaoSelecionado(); //passo 4

    //passo 3
    cartaoAtual++;
    mostrarCartao();
});

/*  OBJETIVO 2  */
const btnVoltar = document.getElementById("btn-voltar"); //passo 1

btnVoltar.addEventListener("click", function(){ //passo 2 

    if(cartaoAtual === 0) {
        cartaoAtual = cartoes.length;
    }

    esconderCartaoSelecionado(); //passo 4

    //passo 3
    cartaoAtual--;
    mostrarCartao();
});


/*  FUNÇÕES AUXILIARES  */
function esconderCartaoSelecionado(){ //passo 4
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(){ //passo 3
    cartoes[cartaoAtual].classList.add("selecionado");
}