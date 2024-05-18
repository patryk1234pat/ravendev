<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie Raven Dev";
$to = "patrykkruk58@gmail.com";
$phone = $_POST["tel"]
$message = $_POST["msg"];

$txt = "Imię " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Telefon: " . $phone . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: kontakt.html?mail_status=sent");
} else {
    header("Location: kontakt.html?mail_status=error");
}