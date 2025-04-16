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
const textos = [
    "Conteúdo da Categoria 1",
    "Conteúdo da Categoria 2",
    "Conteúdo da Categoria 3",
    "Conteúdo da Categoria 4",
    "Conteúdo da Categoria 5",
];

function apareceConteudo(index, classe1, classe2) {
    const conteudo = document.getElementById("conteudo");
    const calda = document.getElementById("calda");

    const conteudoVisivel = conteudo.style.display === "block";

    if (conteudoVisivel) {
        conteudo.style.display = "none";
        calda.style.display = "none";
    } else {
        conteudo.className = "quadrado " + classe1;
        calda.className = "calda calda" + classe2;
        conteudo.textContent = textos[index];
        conteudo.style.display = "block";
        calda.style.display = "block";
    }
}
document.getElementById("calda").addEventListener("click", () => {
    document.getElementById("conteudo").style.display = "none";
    document.getElementById("calda").style.display = "none";
});
