<?php include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){

$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);

if (empty($_POST["username"]) || empty($_POST["password"])) {
    $errors[] = "All fields are required!";
}

$check = $conn -> prepare("SELECT ID FROM users Where username = ?");
$check -> bind_param("s", $username);
$check->execute();
$check->store_result();

if($check->num_rows>0){
    echo "Username is already taken!";
}else{
    $hashed_password= password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?,?)");
    $stmt->bind_param("ss", $username, $hashed_password);

        if ($stmt->execute()) {
            echo "Registration successful! <a href='login.php'>Login</a>";
        } else {
            echo "An Error occurred.";
        }
    }

};

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>

<form method="POST">

    <label for="username">Username:</label>
    <input type="text" name="username" required> <br>

    <label for="password">Password:</label>
    <input type="text" name="password" required> <br>

    <button type="submit">Register</button>

</form>
    
</body>
</html>