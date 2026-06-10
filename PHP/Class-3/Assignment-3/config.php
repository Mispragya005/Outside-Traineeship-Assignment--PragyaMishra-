<?php 
$host = "localhost";
$dbname= "php_assignment";
$user= "root";
$password= "";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn -> connect_error){
    die("Connection failed: " . $conn -> connect_error);
}

?>