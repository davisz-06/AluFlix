// 1. Seleciona o elemento botão do HTML usando seu ID
const btn = document.getElementById("theme-toggle"); // Busca elemento com id="theme-toggle"

// 2. Função para carregar a preferência de tema salva no localStorage
function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem("theme"); // Recupera o tema salvo (pode ser "light" ou "dark")
    
    if (temaSalvo === "light") { // Se o tema salvo é claro
        document.body.classList.add("light-mode"); // Adiciona classe light-mode
        btn.textContent = "🌙"; // Mostra ícone de lua (opção de escurecer)
    } else { // Se é escuro ou não existe preferência salva
        document.body.classList.remove("light-mode"); // Garante que modo escuro está ativo
        btn.textContent = "☀️"; // Mostra ícone de sol (opção de clarear)
    }
}

// 3. Função para alternar entre modo claro e escuro
function alternarTema() {
    // Alterna (toggle) a classe "light-mode" no elemento body
    // Se a classe existir, remove; se não existir, adiciona
    document.body.classList.toggle("light-mode");
    
    // Verifica qual modo está ativo agora
    if (document.body.classList.contains("light-mode")) { // Se modo claro está ativo
        btn.textContent = "🌙"; // Mostra ícone de lua
        localStorage.setItem("theme", "light"); // Salva preferência no localStorage
    } else { // Se modo escuro está ativo
        btn.textContent = "☀️"; // Mostra ícone de sol
        localStorage.setItem("theme", "dark"); // Salva preferência no localStorage
    }
}

// 4. Adiciona ouvinte de evento que dispara quando o botão é clicado
btn.addEventListener("click", alternarTema); // Chama função ao clicar

// 5. Carrega o tema salvo quando a página é carregada
carregarTemaSalvo(); // Executa ao iniciar
