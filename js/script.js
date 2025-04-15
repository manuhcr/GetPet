let slideAtual = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.slide');  // Seleciona todos os slides
const totalSlides = slides.length;  // Conta o total de slides
const indicators = document.querySelectorAll(".indicator");

// Função para mover o slide de scordo com o parâmetro step
function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    indicators[index].classList.add("active")

}
function proxSlide() {
    slideAtual = (slideAtual + 1) % totalSlides;
    showSlide(slideAtual);
}

// Configurar o intervalo automático para mudar de slide a cada segundos
function comecarSlider() {
    setInterval(proxSlide, 5000);
}


showSlide(slideAtual);
comecarSlider();
// Adiciona evento de clique nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        slideAtual = index;
        showSlide(slideAtual);
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('active');
});
function apareceConteudo(index, classe, botao) {
    // Obtém os elementos necessários
    const conteudo = document.getElementById("conteudo");
    const calda = document.getElementById("calda");

    // Array de textos para cada categoria
    const textos = [
        "Conteúdo da Categoria 1",
        "Conteúdo da Categoria 2",
        "Conteúdo da Categoria 3",
        "Conteúdo da Categoria 4",
        "Conteúdo da Categoria 5",
    ];

    // Verifica se o conteúdo está visível
    const conteudoVisivel = conteudo.style.display === "block";

    // Se o conteúdo já estiver visível, oculta tudo ao clicar em qualquer parte do botão ou quadrado
    if (conteudoVisivel) {
        conteudo.style.display = "none";
        calda.style.display = "none";
    } else {
        // Caso contrário, exibe o conteúdo e a calda

        // Define a classe e o texto do conteúdo com base no index
        conteudo.className = "quadrado " + classe;
        conteudo.textContent = textos[index];
        conteudo.style.display = "block"; // Exibe o conteúdo

        // Obtém a posição do botão
        const botaoPosicao = botao.getBoundingClientRect();
        const paiPosicao = botao.parentElement.getBoundingClientRect();

        // Calcula a posição da calda para que fique no centro do botão
        const deslocamentoEsquerda = botaoPosicao.left - paiPosicao.left + botao.offsetWidth / 3.25 - 30;

        // Define a posição e cor de fundo da calda
        calda.style.left = `${deslocamentoEsquerda}px`;
        calda.style.backgroundColor = window.getComputedStyle(conteudo).backgroundColor;
        calda.style.display = "block"; // Exibe a calda
    }
}

// Adiciona um evento de clique no botão e no quadrado
document.querySelectorAll(".botao, .quadrado").forEach(element => {
    element.addEventListener("click", (e) => {
        // Verifica se o clique ocorreu no botão ou no quadrado
        apareceConteudo(0, "classe-do-botao", e.target); // Passa o botão clicado
    });
});
