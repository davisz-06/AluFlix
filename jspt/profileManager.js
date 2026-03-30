// Script para gerenciar perfis - Gerenciar e Adicionar

document.addEventListener('DOMContentLoaded', () => {
    const manageBtn = document.getElementById('manage-profiles-btn');
    const addBtn = document.getElementById('add-profile-btn');

    // Gerenciar Perfis
    if (manageBtn) {
        manageBtn.addEventListener('click', () => {
            alert('Funcionalidade de Gerenciar Perfis - Em desenvolvimento!\n\nAqui você poderá:\n✎ Editar nomes de perfis\n✎ Mudar imagens de perfis\n✎ Definir controles parentais');
        });
    }

    // Adicionar Novo Perfil
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const nomeNovo = prompt('Digite o nome do novo perfil:');
            
            if (nomeNovo && nomeNovo.trim()) {
                // Salvaria o novo perfil no localStorage
                const perfisExistentes = JSON.parse(localStorage.getItem('perfis')) || [];
                
                const novoPerfil = {
                    id: Date.now(),
                    nome: nomeNovo.trim(),
                    imagem: '/assets/Perfil-default.png' // Imagem padrão
                };
                
                perfisExistentes.push(novoPerfil);
                localStorage.setItem('perfis', JSON.stringify(perfisExistentes));
                
                alert(`Perfil "${nomeNovo}" adicionado com sucesso! ✅\n\nRecarregue a página para ver o novo perfil.`);
            } else if (nomeNovo !== null) {
                alert('Por favor, digite um nome válido para o perfil.');
            }
        });
    }
});
