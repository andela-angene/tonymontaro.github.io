<?php
if(isset($_POST['send_mail'])):
// from the form
$name = trim(strip_tags($_POST['name']));
$email = trim(strip_tags($_POST['email']));
$business = trim(strip_tags($_POST['business']));
$phone = trim(strip_tags($_POST['phone']));
$website = trim(strip_tags($_POST['website']));
$business_type = trim(strip_tags($_POST['business_type']));
$sponsor = $_POST['sponsor'];
$exhibitor = $_POST['exhibitor'];
$rent_room = $_POST['rent_room'];
$advertising = $_POST['advertising'];
$other = $_POST['other'];

$message = 'Name: ' . $name . '<br>';
$message .= 'Email: ' . $email . '<br>';
$message .= 'Business Name: ' . $business . '<br>';
$message .= 'Phone: ' . $phone . '<br>';
$message .= 'Website: ' . $website . '<br>';
$message .= 'Business Type: ' . $business_type . '<br>';

$services = "";
$services .= ($sponsor == "true") ? 'Sponsor, ': "";
$services .= ($exhibitor == "true") ? 'Exhibitor Space, ': "";
$services .= ($rent_room == "true") ? 'Class or Rent a Room, ': "";
$services .= ($advertising == "true") ? 'Advertising, ': "";
$services .= ($other == "true") ? 'Other, ': "";
if($services == ""){
    $services = "none selected";
}
$message .= "Areas of Interest: ". $services. "<br><br>";

// set here
$subject = "Contact form your website by: ".$email;
$to = 'Barbara@AllKidsFair.com';

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