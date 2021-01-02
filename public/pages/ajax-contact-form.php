<?php
class Ajax_Contact_Form {
    protected $address_destination = 'jcantoninfo@gmail.com';

    protected $strings = array(
        'body'              => '
            <h1>{{subject}}</h1>
            <p><strong>From:</strong> {{name}}</p>
            <p><strong>E-Mail:</strong> {{email}}</p>
            <p><strong>Message:</strong> <br> {{message}}</p>',
        'success'           => 'Thank You! I will be in touch.',
        'error'             => 'Sorry there was an error sending your message. Please check server PHP mail configuration.',
        'demo'              => 'This is demo message from PHP',
        'header_injection'  => 'Header injection detected.',
        'enter_name'        => 'Please enter your name.',
        'enter_email'       => 'Please enter a valid email address.',
        'enter_subject'     => 'Please enter a valid subject',
        'enter_message'     => 'Please enter your message.',
        'ajax_only'         => 'Allowed only XMLHttpRequest.',
    );

    public function __construct() {

        // Ajax check.
        if ( ! isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) || 'XMLHttpRequest' !== $_SERVER['HTTP_X_REQUESTED_WITH'] ) {
            $this->errorHandler('ajax_only');
        }

        // Get post data.
        $name    = stripslashes(trim($_POST['name']));
        $email   = stripslashes(trim($_POST['email']));
        $subject = stripslashes(trim($_POST['subject']));
        $message = stripslashes(trim($_POST['message']));

        // Sanitize fields.
        $name = filter_var($name, FILTER_SANITIZE_STRING);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $subject = filter_var($subject, FILTER_SANITIZE_STRING);
        $message = filter_var($message, FILTER_SANITIZE_STRING);
        $message = nl2br($message, false);

        $pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
        if ( preg_match($pattern, $name) || preg_match($pattern, $email) ) {
            $this->errorHandler('header_injection');
        }

        $isEmailValid = filter_var($email, FILTER_VALIDATE_EMAIL);

        if ( ! $name ) {
            $this->errorHandler('enter_name');
        }

        if ( ! $isEmailValid || ! $email ) {
            $this->errorHandler('enter_email');
        }

        if( ! $subject){
            $this->errorHandler('enter_subject');
        } 

        if ( ! $message ) {
            $this->errorHandler('enter_message');
        }

        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
        $headers .= "From: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $this->address_destination" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

        $body = $this->getString('body');
        $body = $this->template( $body, array(
            'subject' => $subject,
            'name'    => $name,
            'email'   => $email,
            'subject' => $subject,
            'message' => $message,
        ) );
        $body = "
        <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
        <html>
            <head>
                <title>{$this-> $subject}</title>
                <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>
            </head>
            <body>{$body}</body>
        </html>";

        // If there is no error, send the email.
        $result = @mail($this->address_destination, $this-> $subject, $body, $headers);
        if ( $result ) {
            $this->successHandler('success');
        } else {
            $this->errorHandler('error');
        }
    }

    /**
     * Template string.
     *
     * @param $string
     * @param $vars
     *
     * @return string
     */
    public function template($string, $vars) {
        foreach ( $vars as $name => $val ) {
            $string = str_replace("{{{$name}}}", $val, $string);
        }
        return $string;
    }

    /**
     * Get string from $string variable.
     *
     * @param $string
     *
     * @return string
     */
    public function getString($string) {
        return isset( $this->strings[$string] ) ? $this->strings[$string] : $string;
    }

    /**
     * Error result.
     *
     * @param $message
     */
    public function errorHandler($message) {
        die(json_encode(array(
            'type'     => 'error',
            'response' => $this->getString($message),
        )));
    }

    /**
     * Success result.
     *
     * @param $message
     */
    public function successHandler($message) {
        die(json_encode(array(
            'type'     => 'success',
            'response' => $this->getString($message),
        )));
    }
}
new Ajax_Contact_Form();

