<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $para = 'detonator834@gmail.com';
    $assunto = 'Formulário de Contato';
    $corpo = "Nome: $nome\nEmail: $email\nMensagem: $mensagem";
    $headers = "From: $email";

    if (mail($para, $assunto, $corpo, $headers)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        echo 'Ocorreu um erro ao enviar o e-mail.';
    }
}
?>
