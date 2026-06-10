<?php

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST['name']);
    $age = (int) $_POST['age'];
    $hobbies = isset($_POST['hobbies']) ? $_POST['hobbies'] : [];
    $favoriteColor = htmlspecialchars($_POST['favoriteColor']);

    //1.
    echo "Hello" . " ". $name . '<br>';

    //2.
    if ($age >= 18){
        echo "You are an adult" . '<br>';
    }else {
        echo "You are a minor!" . '<br>';
    } 
    
    //3. 
    switch ($favoriteColor){
        case ("red"):
            echo "Red is a bold choice!" . '<br>';
            break;
        case ("blue"):
            echo "Blue is calming" . '<br>';
            break;
        case ("green"):
            echo "Green represents nature" . '<br>';
            break;
        default: 
            echo "That's an interesting choice!" . '<br>';    
            break;  
    }

    //4.
     foreach ($hobbies as $hobbies){
        echo $hobbies . " " . '<br>';
     }

     //5.
     for ($i = 1; $i <= $age; $i++){
        echo "Here is a list of the years you have lived:" . $i . '<br>';
     }     
    }
   



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Miranda+Sans:ital,wght@0,400..700;1,400..700&family=Poppins:wght@400;600&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <title>Assignment 1</title>
</head>
<body>
    <form action="" method="post">
        <div class="forms">
            <label for="name">Name:</label> 
            <input type="text" id="name" name="name" required><br>
        </div>
        
        <div class="forms">
            <label for="age">Age:</label> 
            <input type="number" id="age" name="age" required><br>
        </div>
        
        <div class="forms"> 
            <label for="hobbies">Hobbies:</label> 
            <input type="checkbox" id="hobbies" name="hobbies[]" value="reading" required> <br>
            <label for="hobbies">Reading</label> 
            <input type="checkbox" id="hobbies" name="hobbies[]" value="swimming" required> <br>
            <label for="hobbies">Swimming</label>
            <input type="checkbox" id="hobbies" name="hobbies[]" value="cooking" required> <br>
            <label for="hobbies">Cooking</label><br> 
        </div>
        
        <div class="forms">
            <label for="favoriteColor">Favorite Color:</label>
            <input type="text" id="favoriteColor" name="favoriteColor" required><br>
        </div>
        
        <button type="submit">Submit</button>
    </form>
</body>
</html>

   