<?php

$host = "localhost";
$user = "root";
$pass = "Pas@2023";
$dbname = "login_portal";


try{
    //Conexão com a porta
    //$conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $pass);

    //Conexão sem a porta
    $conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);
    
    //echo "Conexão com banco de dados realizado com sucesso!";
}catch(PDOException $err){
    echo "Erro: Conexão com banco de dados não realizado com sucesso!";
}