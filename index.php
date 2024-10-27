<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $massage = $_POST["massage"];

    if (empty($name)) {
        echo "Пожалуйста, введите Ваше имя.";
    } elseif (empty($email)) {
        echo "Пожалуйста, введите Ваш email";
    } elseif (empty($massage)) {
        echo "Пожалуйста, введите сообщение";
    } else {
        
    }

}
?>