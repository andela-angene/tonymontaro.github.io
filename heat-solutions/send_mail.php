<?php
if(isset($_POST['send_mail'])):
// from the form
$name = trim(strip_tags($_POST['name']));
$email = trim(strip_tags($_POST['email']));
$phone = trim(strip_tags($_POST['phone']));
$dtg = $_POST['dtg'];
$silk = $_POST['silk'];
$embroid = $_POST['embroid'];
$vinyl = $_POST['vinyl'];

$message = 'Name: ' . $name . '<br>';
$message .= 'Email: ' . $email . '<br>';
$message .= 'Phone: ' . $phone . '<br>';

$services = "";
$services .= ($dtg == "true") ? 'Bed Bugs, ': "";
$services .= ($silk == "true") ? 'W.D.Os, ': "";
$services .= ($embroid == "true") ? 'V.O.Cs, ': "";
$services .= ($vinyl == "true") ? 'Other, ': "";
if($services == ""){
    $services = "none selected";
}
$message .= "Service(s): ". $services. "<br><br>";

$message .= 'Message: ' . htmlentities($_POST['message']);

// set here
$subject = "Contact form your website by: ".$name;
$to = 'customerservice@heatsolutions.co';

//$body = <<<HTML
//$message
//HTML;


$headers = "From: ".$email."\r\n";
$headers .= "Content-type: text/html\r\n";
if(mail($to, $subject, $message, $headers)){
echo "success!";
}else{echo "failure";}
endif;
?>