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
function apareceConteudo(index, classe1, classe2) {
    const conteudos = document.getElementById("conteudo");
    const calda = document.getElementById("calda");
    const botoes = document.querySelectorAll(".botao"); // Seleciona todos os botões com a classe "botao"

    // Remover a classe 'active' de todos os botões antes de adicionar ao botão clicado
    botoes.forEach(botao => botao.classList.remove('active'));

    // Adicionar a classe 'active' ao botão clicado
    botoes[index].classList.add('active');

    // Configurar o conteúdo de acordo com o botão clicado
    if (conteudos && calda) {
        conteudos.className = "quadrado " + classe1;
        conteudos.style.width = '1340px';
        calda.className = "calda calda" + classe2;
        conteudos.style.transition = 'all ease-in-out 0.2s';
        conteudos.textContent = `Conteúdo do botão ${index + 1}`;
        conteudos.style.display = "block";
        calda.style.display = "block";
    }
    let conteudoVisivel = null; // Variável para controlar o card atualmente visível

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            // Se o card atual já está visível, oculta tudo
            if (conteudoVisivel === index) {
                conteudos.style.display = "none";
                calda.style.display = "none";
                conteudoVisivel = null; // Reseta o controle de visibilidade
            } else {
                // Atualiza o controle de visibilidade
                conteudoVisivel = index;
            }
        });
    });
}


