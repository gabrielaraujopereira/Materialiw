document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name === '') {
        alert('Por favor, insira seu nome.');
        nameInput.focus();
        return;
    }

    if (email === '') {
        alert('Por favor, insira seu email.');
        emailInput.focus();
        return;
    }

    if (message === '') {
        alert('Por favor, insira sua mensagem.');
        messageInput.focus();
        return;
    }

    this.submit();
});
