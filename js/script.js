let index = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.slide');  // Seleciona todos os slides
const totalSlides = slides.length;  // Conta o total de slides

// Função para mover o slide de scordo com o parâmetro step
function moveSlide(step) {
    index += step;  // Atualiza o índice com o valor de "step" (1 para avançar, -1 para voltar)

    if (index >= totalSlides) // Se o indice for maior ou igual ao numero total de slides
    {
        index = 0;  // Avança para o primeiro slide
    } else if (index < 0) // Se o indice for menor q 0, ou seja, se estiver no primeiro slide
    {
        index = totalSlides - 1;  // Volta para o último slide
    }

    // Move a posição da .slider para mostrar o slide correto
    document.querySelector('.slider').style.transform = `translateX(-${index * 80}%)`;
}

// Função para avançar automaticamente
function autoMove() {
    moveSlide(1);  // Avança um slide
}

// Configurar o intervalo automático para mudar de slide a cada 3 segundos
setInterval(autoMove, 3000);
