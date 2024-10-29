<?php
$dsn = 'mysql:host=localhost;dbname=web-site_portfolio';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    

    if (!empty($name) && !empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            try {
                $sql = "INSERT INTO messages (name, email, message) VALUES (:name, :email, :message)";
                $stmt = $pdo->prepare($sql);

                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':message', $message);

                $stmt->execute();

                header("Location: success.js");
                exit();
            } catch (PDOException $e) {
                echo "Ошибка при записи в базу данных: " . $e->getMessage();
            }
        } else {
            echo "Неверный формат email!";
        }
    } else {
        echo "Пожалуйста, заполните все поля!";
    }
} else {
    echo "Форма не отправлена!";
}
?>
