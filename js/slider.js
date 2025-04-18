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