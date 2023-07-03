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
        echo 'Obrigado por entrar em contato! Sua mensagem foi enviada.';
    } else {
        echo 'Desculpe, ocorreu um erro ao enviar sua mensagem.';
    } else {
    header("Location: contato.html");
    exit();

}
?>
