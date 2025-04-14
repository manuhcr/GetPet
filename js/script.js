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
function apareceConteudo(categoria) {
    const content = document.querySelectorAll('#content div')[categoria];
    const square = document.querySelectorAll('.quadrado');
    // Verifica se o conteúdo está visível e alterna entre mostrar e esconder
    if (content.style.display == 'block') {
        content.style.display = 'none';  // Esconde o conteúdo
    } else {
        // Esconde todos os conteúdos primeiro
        document.querySelectorAll('#content div').forEach(div => div.style.display = 'none');
        // Exibe o conteúdo correspondente ao botão clicado
        const square = document.querySelectorAll('.quadrado')
        content.style.display = 'block';
        square.style.display = 'block';
    }
}