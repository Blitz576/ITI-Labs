<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>

    <?php

     if(isset($_COOKIE['login_error'])){
         var_dump($_COOKIE);
         echo "<p style='color: #45a049'>";
         echo $_COOKIE['login_error'];
         echo "</p>";
         setcookie("login_error","",time()-3600);
     }

    ?>

    <form action="login.php" method="POST">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>

