<?php 
require_once 'RomanCalculator.php';
$output = '';
if ($_SERVER['REQUEST_METHOD']=='POST'){
    $num = $_POST['number'];
    $calculator = new RomanCalculator();
    $output = $calculator->convertToRomanNumerals($num);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 2</title>
</head>
<body>
    <section>
        <h1>Roman Number Calculator</h1>
        <form method="POST">
            <label for="number">Enter a number:</label>
            <input type="number" id="number" name="number" required>
            <button type="submit">Convert</button>
        </form>

        <h2>Output: <?php echo $output; ?></h2>
    </section>
    
</body>
</html>