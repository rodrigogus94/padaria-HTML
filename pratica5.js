/* ============================================================
   PRÁTICA 5 — Formulário sem recarregar a página
   preventDefault + exibir mensagem + reset
   ============================================================ */

// Referência ao formulário de cadastro
const formulario = document.querySelector("#formCadastro");

// Referência à div de mensagem de sucesso
const mensagem = document.querySelector("#mensagemSucesso");

// Só executa se o formulário existir na página (evita erro no index parcial)
if (formulario && mensagem) {
    // Evento "submit" ao enviar o formulário
    formulario.addEventListener("submit", function (evento) {
        // Impede o recarregamento padrão da página
        evento.preventDefault();

        // Exibe a mensagem de confirmação
        mensagem.classList.remove("oculto");
        mensagem.classList.add("visivel");

        // Limpa o campo de e-mail após cadastro
        formulario.reset();
    });
}
