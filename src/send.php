<?php
$fio = $_POST['fio'];
$number = $_POST['number'];
$email = $_POST['contact-email'];
$message = $_POST['contact-message'];

$fio = htmlspecialchars($fio);
$number = htmlspecialchars($number);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$fio = urldecode($fio);
$number = urldecode($number);
$email = urldecode($email);
$message = urldecode($message);

$fio = trim($fio);
$number = trim($number);
$email = trim($email);
$message = trim($message);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("wrestbild57@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email,"Сообщение:".$message,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
