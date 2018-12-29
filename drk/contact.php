<?php

/*
Credit: Bit Repository (http://www.bitrepository.com/)
*/

include 'config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'functions.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$subject ="Contact Form Submission";
$message = htmlspecialchars($_POST['message']);


$error = '';

// Check Name

if(!$name)
{
$error .= 'Please enter your name.<br />';
}

// Check Email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'Please enter a valid e-mail address.<br />';
}

// Check Message (length)

if(!$message || strlen($message) < 10)
{
$error .= "Please enter your message. It should have at least 10 characters.<br />";
}


if(!$error)
{
$mail = mail(WEBMASTER_EMAIL, $subject, $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$name."<".$email.">\r\n"
    ."X-Mailer: PHP/" . phpversion());

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>