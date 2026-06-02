/* ============================================================
   PRÁTICA 6 — Validação customizada de formulário
   Nome, e-mail e quantidade antes do envio
   ============================================================ */

// Referência ao formulário de encomenda
const form = document.querySelector("#formEncomenda");

if (form) {
    form.addEventListener("submit", function (evento) {
        // Impede envio HTTP padrão até validar
        evento.preventDefault();

        // Flag: só envia se todos os campos passarem
        let valido = true;

        // --- Validação do nome ---
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

        // --- Validação do e-mail (@ e ponto) ---
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

        // --- Validação da quantidade (número > 0) ---
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

        // Se tudo válido: confirma e limpa o formulário
        if (valido) {
            alert("Pedido enviado com sucesso!");
            form.reset();
            nome.removeAttribute("aria-invalid");
            email.removeAttribute("aria-invalid");
            qtd.removeAttribute("aria-invalid");
        }
    });
}
