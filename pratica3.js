/* ============================================================
   PRÁTICA 3 — Contador interativo
   Variável de estado + innerText no display
   ============================================================ */

// Variável que guarda a quantidade atual (estado da aplicação)
let quantidade = 0;

// Referência ao elemento que exibe o número na tela
const display = document.querySelector("#displayContador");

// Botão que incrementa em +1
const btnAdd = document.querySelector("#btnAdicionar");

// Botão que zera o contador
const btnClear = document.querySelector("#btnZerar");

if (!display || !btnAdd || !btnClear) {
    // Contador não está nesta página
} else {
// Ao clicar em "Adicionar +1"
btnAdd.addEventListener("click", function () {
    quantidade = quantidade + 1; // soma 1 ao estado
    display.innerText = quantidade; // atualiza o texto visível no DOM
});

// Ao clicar em "Zerar"
btnClear.addEventListener("click", function () {
    quantidade = 0; // redefine o estado
    display.innerText = quantidade; // atualiza o display para 0
});
}
