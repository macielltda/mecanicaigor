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

    // Validação do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            ano: document.getElementById('ano').value,
            problema: document.getElementById('problema').value
        };

        // Aqui você pode adicionar o código para enviar os dados para um servidor
        // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
        alert('Agendamento realizado com sucesso! Entraremos em contato em breve.');
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