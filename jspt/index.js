// Função para armazenar o perfil ativo no localStorage
function armazenarPerfilAtivoNinja() {
    const profileLinks = document.querySelectorAll('.profile-link');
    
    profileLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Obtém o artigo pai do perfil
            const profile = this.querySelector('.profile');
            
            // Obtém a imagem e o nome do perfil
            const img = profile.querySelector('img');
            const figcaption = profile.querySelector('figcaption');
            
            if (img && figcaption) {
                // Armazena no localStorage
                localStorage.setItem('perfilAtivoNome', figcaption.textContent);
                localStorage.setItem('perfilAtivoImagem', img.src);
                
                // Log para confirmação
                console.log('Perfil armazenado:', {
                    nome: figcaption.textContent,
                    imagem: img.src
                });
            }
        });
    });
}

// Executa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', armazenarPerfilAtivoNinja);
