async function carregarItem(id, file) {
    const container = document.getElementById(id);
    const response = await fetch(file);
    const content = await response.text();
    container.innerHTML = content;
}

carregarItem('navbar', '../components/navbar.html');
carregarItem('secao_Apresentacao', './sections/secao_Apresentacao.html');
carregarItem('secao_Produtos', './sections/secao_Produtos.html');
carregarItem('secao_Noticias', './sections/secao_Noticias.html');
carregarItem('secao_Times', './sections/secao_Times.html');
carregarItem('secao_Curiosidades_Campeonato', './sections/secao_Curiosidades_Campeonato.html');
carregarItem('secao6', './sections/secao6.html');
carregarItem('secao7', './sections/secao7.html');
// carregarItem('footer', '../components/footer.html');