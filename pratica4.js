/* ============================================================
   PRÁTICA 4 — Alternância de tema com classList.toggle
   ============================================================ */

// Referência ao botão que alterna claro/escuro
const botao = document.querySelector("#btnAlternar");

if (!botao) {
    // Página sem Prática 4: não executa (evita erro)
} else {
// Escuta cliques no botão de tema
botao.addEventListener("click", function () {
    // toggle: adiciona se não existir, remove se existir
    document.body.classList.toggle("tema-claro");
    document.body.classList.toggle("tema-escuro");

    // Verifica se o modo escuro está ativo após o toggle
    const estaNoModoEscuro = document.body.classList.contains("tema-escuro");

    // Atualiza rótulo do botão e estado para leitores de tela
    if (estaNoModoEscuro) {
        botao.innerText = "Ativar Modo Claro";
        botao.setAttribute("aria-pressed", "true");
    } else {
        botao.innerText = "Ativar Modo Escuro";
        botao.setAttribute("aria-pressed", "false");
    }
});
}
