/* ============================================================
   PRÁTICA 1 — Primeiro script JavaScript
   getElementById + addEventListener + alert + console.log
   ============================================================ */

// Busca o botão pelo id definido no HTML ("btnMensagem")
const botao = document.getElementById("btnMensagem");

if (!botao) {
    // Elemento ausente nesta página
} else {
// Registra um ouvinte para o evento "click" no botão
botao.addEventListener("click", function () {
    // alert(): caixa de diálogo nativa do navegador com a mensagem
    alert("Olá! O pão de queijo quentinho acaba de sair do forno!");

    // console.log(): mensagem no DevTools (F12) para depuração
    console.log("Botão de boas-vindas clicado.");
});
}
