/* ============================================================
   INDEX — JavaScript unificado (Práticas 1 a 6)
   Usado apenas em index.html; as páginas praticaN.html
   continuam com js/praticaN.js separados.
   ============================================================ */

// Aguarda o HTML estar pronto antes de ligar eventos
document.addEventListener("DOMContentLoaded", function () {
    iniciarPratica1();
    iniciarPratica2();
    iniciarPratica3();
    iniciarPratica4();
    iniciarPratica5();
    iniciarPratica6();
});

/* ---------- PRÁTICA 1 — Botão e alert ---------- */
function iniciarPratica1() {
    const botao = document.getElementById("btnMensagem");
    if (!botao) return;

    botao.addEventListener("click", function () {
        alert("Olá! O pão de queijo quentinho acaba de sair do forno!");
        console.log("Botão de boas-vindas clicado.");
    });
}

/* ---------- PRÁTICA 2 — Seletores no console ---------- */
function iniciarPratica2() {
    const titulo = document.querySelector("#tituloCardapio");
    if (!titulo) return;

    console.log("Conteúdo do Título:", titulo.innerText);

    const paragrafoDestaque = document.querySelector("#pratica2 .destaque");
    if (paragrafoDestaque) {
        console.log("Texto de Destaque:", paragrafoDestaque.innerText);
    }

    const produtos = document.querySelectorAll("#pratica2 .card-produto");
    console.log("Quantidade de produtos:", produtos.length);
}

/* ---------- PRÁTICA 3 — Contador ---------- */
function iniciarPratica3() {
    let quantidade = 0;
    const display = document.querySelector("#displayContador");
    const btnAdd = document.querySelector("#btnAdicionar");
    const btnClear = document.querySelector("#btnZerar");

    if (!display || !btnAdd || !btnClear) return;

    btnAdd.addEventListener("click", function () {
        quantidade = quantidade + 1;
        display.innerText = quantidade;
    });

    btnClear.addEventListener("click", function () {
        quantidade = 0;
        display.innerText = quantidade;
    });
}

/* ---------- PRÁTICA 4 — Tema claro / escuro ---------- */
function iniciarPratica4() {
    const botao = document.querySelector("#btnAlternar");
    if (!botao) return;

    botao.addEventListener("click", function () {
        document.body.classList.toggle("tema-claro");
        document.body.classList.toggle("tema-escuro");

        const estaNoModoEscuro = document.body.classList.contains("tema-escuro");

        if (estaNoModoEscuro) {
            botao.innerText = "Ativar Modo Claro";
            botao.setAttribute("aria-pressed", "true");
        } else {
            botao.innerText = "Ativar Modo Escuro";
            botao.setAttribute("aria-pressed", "false");
        }
    });
}

/* ---------- PRÁTICA 5 — Newsletter ---------- */
function iniciarPratica5() {
    const formulario = document.querySelector("#formCadastro");
    const mensagem = document.querySelector("#mensagemSucesso");

    if (!formulario || !mensagem) return;

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        mensagem.classList.remove("oculto");
        mensagem.classList.add("visivel");
        formulario.reset();
    });
}

/* ---------- PRÁTICA 6 — Validação de encomenda ---------- */
function iniciarPratica6() {
    const form = document.querySelector("#formEncomenda");
    if (!form) return;

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        let valido = true;

        const nome = document.querySelector("#nome");
        const erroNome = document.querySelector("#erroNome");

        if (nome.value.trim().length < 3) {
            erroNome.classList.remove("oculto");
            erroNome.classList.add("visivel");
            nome.setAttribute("aria-invalid", "true");
            valido = false;
        } else {
            erroNome.classList.remove("visivel");
            erroNome.classList.add("oculto");
            nome.setAttribute("aria-invalid", "false");
        }

        const email = document.querySelector("#email");
        const erroEmail = document.querySelector("#erroEmail");
        const textoEmail = email.value.trim();

        if (!textoEmail.includes("@") || !textoEmail.includes(".")) {
            erroEmail.classList.remove("oculto");
            erroEmail.classList.add("visivel");
            email.setAttribute("aria-invalid", "true");
            valido = false;
        } else {
            erroEmail.classList.remove("visivel");
            erroEmail.classList.add("oculto");
            email.setAttribute("aria-invalid", "false");
        }

        const qtd = document.querySelector("#quantidade");
        const erroQtd = document.querySelector("#erroQuantidade");
        const valorQtd = qtd.value.trim();

        if (valorQtd === "" || isNaN(valorQtd) || Number(valorQtd) <= 0) {
            erroQtd.classList.remove("oculto");
            erroQtd.classList.add("visivel");
            qtd.setAttribute("aria-invalid", "true");
            valido = false;
        } else {
            erroQtd.classList.remove("visivel");
            erroQtd.classList.add("oculto");
            qtd.setAttribute("aria-invalid", "false");
        }

        if (valido) {
            alert("Pedido enviado com sucesso!");
            form.reset();
            nome.removeAttribute("aria-invalid");
            email.removeAttribute("aria-invalid");
            qtd.removeAttribute("aria-invalid");
        }
    });
}
