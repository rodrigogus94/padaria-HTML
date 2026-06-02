/* ============================================================
   PRÁTICA 2 — Seletores querySelector e querySelectorAll
   Lê título, destaque e lista de produtos no console
   ============================================================ */

// querySelector com id: retorna o primeiro elemento com id "tituloCardapio"
const titulo = document.querySelector("#tituloCardapio");

if (!titulo) {
    // Cardápio não está nesta página
} else {
// innerText: texto visível dentro do elemento; exibido no console
console.log("Conteúdo do Título:", titulo.innerText);

// querySelector com classe: primeiro elemento com class "destaque"
const paragrafoDestaque = document.querySelector(".destaque");

// Mostra o texto do parágrafo de destaque
console.log("Texto de Destaque:", paragrafoDestaque.innerText);

// querySelectorAll: NodeList com todos os .card-produto
const produtos = document.querySelectorAll(".card-produto");

// length: quantidade de itens encontrados
console.log("Quantidade de produtos:", produtos.length);
}
