<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): // Send the email;
        header("Access-Control-Allow-Origin: *");
        
        // Payload is not sent to $_POST variable,
        // it's sent to php://input as a text
        $json = file_get_contents('php://input');
        
        // Parse the payload from text format to object
        $params = json_decode($json);
        
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        
        $recipient = 'anja_schwab@gmx.de';  
        $subject = "Contact From <$email>";
        $message = "From: " . $name . " (" . $email . ")<br>" . $message;
        
        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        
        // Additional headers
        $headers[] = "From: noreply@mywebsite.com";
        
        
        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;
    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
