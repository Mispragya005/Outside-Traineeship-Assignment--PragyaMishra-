<?php include 'config.php';

session_start();

if(isset($_SISSION['user'])){
    header("Location:welcome.php");
    exit;

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>

<h2>Welcome, <?php echo $_SESSION['user']; ?></h2>


<a href="logout.php">Logout</a>

    
</body>
</html>