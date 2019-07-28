<?php
if(isset($_POST['submit'])){
    $fullName = $_POST['fullName'];
    $occupation = $_POST['occupation'];
    $subject = $_POST['subject'];
    $topic = $_POST['topic'];
    $phoneNumber = $_POST['phoneNumber'];
    $emailAddress = $_POST['emailAddress'];

    $mailTo = "tejnadas@gmail.com";
    $headers = "From: ".$emailAddress;
    $txt = "You have received an e-mail from ".$name;

    mail($mailTo, $txt, $headers, $fullName, $occupation, $subject, $topic, $phoneNumber, $emailAddress);
    header("Location: index.php?mailsend");
}
?>