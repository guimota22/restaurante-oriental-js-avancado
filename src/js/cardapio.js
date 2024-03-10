document.getElementById('promo-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const checkbox = document.getElementById('termos');  
    
    if (email === '') {
        alert('Preencha o campo de e-mail.');
        return;
    }
    if (!validacao(email)) {
        alert('E-mail inválido.');
        return;
    }
    if (!checkbox.checked) {
        document.getElementById('termos-erro').textContent = 'Você precisa aceitar os termos de uso';
        return;
    }

    document.getElementById('termos-erro').textContent = '';

    alert(`E-mail "${email}" cadastrado com sucesso!`);

    emailInput.value = '';
    checkbox.checked = false;
});

function validacao(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email) && email.length >= 10 && countOccurrences(email, '@') === 1;
}

function countOccurrences(string, char) {
    return string.split(char).length - 1;
}