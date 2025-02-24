// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o link pelo ID
  const linkProdutos = document.getElementById('link-produtos');

  // Adiciona um evento de clique ao link
  linkProdutos.addEventListener('click', event => {
    event.preventDefault(); // Evita o comportamento padrão do link
    exibirProdutos(); // Chama a função para exibir os produtos
    
  });
});

// Função para inserir as sections no <main>
function exibirProdutos() {
  // Seleciona a tag <main>
  const main = document.querySelector('main');

  // Limpa o conteúdo do <main>
  main.innerHTML = "";

  // Cria as sections com conteúdo
  const sections = `
    <section>
        <h2>Produto 1</h2>
        <p>Descrição do produto 1.</p>
    </section>

    <section>
        <h2>Produto 2</h2>
        <p>Descrição do produto 2.</p>
    </section>
`;

  // Insere as sections dentro do <main>
  main.innerHTML = sections;
}
