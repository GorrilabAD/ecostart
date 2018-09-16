<?php
$fio = $_POST['fio'];
$number = $_POST['number'];
$email = $_POST['email'];

$fio = htmlspecialchars($fio);
$number = htmlspecialchars($number);
$email = htmlspecialchars($email);

$fio = urldecode($fio);
$number = urldecode($number);
$email = urldecode($email);

$fio = trim($fio);
$number = trim($number);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("wrestbild57@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
