document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-agendamento');
    
    // Máscara para o campo de telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    // Validação e envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const ano = document.getElementById('ano').value;
        const problema = document.getElementById('problema').value;

        // Criar mensagem formatada para o WhatsApp
        const mensagem = `Olá! Gostaria de agendar um serviço:
        
*Dados do Cliente:*
Nome: ${nome}
Telefone: ${telefone}

*Dados do Veículo:*
Marca: ${marca}
Modelo: ${modelo}
Ano: ${ano}

*Descrição do Problema:*
${problema}`;

        // Codificar a mensagem para URL
        const mensagemCodificada = encodeURIComponent(mensagem);
        
        // Número do WhatsApp da oficina
        const numeroWhatsApp = '5531996519655';
        
        // Criar o link do WhatsApp com a mensagem
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
        
        // Abrir o WhatsApp em uma nova janela
        window.open(linkWhatsApp, '_blank');
        
        // Limpar o formulário
        form.reset();
    });

    // Adicionar efeito de scroll suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 