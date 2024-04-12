document.addEventListener('DOMContentLoaded', function() {
    // Cache os links do header
    const headerLinks = document.querySelectorAll('header nav ul li a');

    // Adiciona um listener de scroll à janela
    window.addEventListener('scroll', function() {
        // Obtém a posição atual da janela
        const currentPosition = window.pageYOffset;

        // Itera sobre os links do header
        headerLinks.forEach(function(link) {
            // Obtém o alvo do link
            const target = document.querySelector(link.getAttribute('href'));

            // Verifica se o alvo está visível na janela
            if (target.offsetTop <= currentPosition && (target.offsetTop + target.offsetHeight) > currentPosition) {
                // Adiciona a classe 'active' ao link
                link.classList.add('active');
            } else {
                // Remove a classe 'active' do link
                link.classList.remove('active');
            }
        });
    });
});