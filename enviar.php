<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $destinatario = "detonator834@gmail.com";

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $assunto = "Contato pelo Formulário do Site";
    $corpo = "Nome: " . $nome . "\n";
    $corpo .= "Email: " . $email . "\n";
    $corpo .= "Mensagem: " . $mensagem;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }

} else {
    header("Location: contato.html");
    exit;
}
?>

