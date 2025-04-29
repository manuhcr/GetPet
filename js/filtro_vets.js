
function buscarVet() {

    const buscaVet = document.getElementById('search');
    const cards = document.querySelectorAll('.cardbox');

    cards.forEach(card => {
        const nome = document.querySelector('.nome').value.toLowerCase();
        const tipoVet = document.getElementById('categoria').value.toLowerCase();

        const nomeCombina = nome == buscaVet;
        const tipoVetCombina = tipoVet

        card.style.display(nomeCombina) {

        }
    })

}

