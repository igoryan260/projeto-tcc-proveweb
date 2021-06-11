<?php
    require_once "./conexao.php";
    //print_r($_POST);

    //session_start();
    //print_r($_SESSION);exit;

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = md5($_POST['senha']);
    $data_nasc = $_POST['dataNascimento'];

    //echo $senha;exit;

    $sql = $conexao -> query("INSERT INTO usuario (nome, email, senha, data_nasc) VALUES('$nome', '$email', '$senha', '$data_nasc')");

    //print_r($sql);exit;
    if ($sql==1) {
        echo "
            <script>
                alert('Usuário cadastrado com sucesso!');
                history.back();
            </script>    
        ";

    }else{
        echo "deu ruim";
    }

?>