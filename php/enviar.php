<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$para = 'detonator834@gmail.com'; 
$assunto = 'Nova mensagem de contato';

$corpo = "Nome: $nome\n";
$corpo .= "Email: $email\n";
$corpo .= "Mensagem: $mensagem\n";

if (empty($nome) || empty($email) || empty($mensagem)) {
    echo "Por favor, preencha todos os campos.";
    exit;
}

if (mail($para, $assunto, $corpo)) {

  header("Location: contato.html"); 
  exit;
} else {
 
  echo "Ocorreu um erro ao enviar o email.";
}
?>
