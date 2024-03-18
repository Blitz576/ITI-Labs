<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
            color: #333;
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="password"],
        select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        button[type="submit"],
        button[type="reset"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px;
        }

        button[type="submit"]:hover,
        button[type="reset"]:hover {
            background-color: #45a049;
        }

        .notChoice {
            background-color: lightgray;
        }
    </style>
</head>
<body>
<h2>User Information Form</h2>
<?php
  if(isset($_COOKIE)){
      foreach ($_COOKIE as $msg)
      {
         echo "<p style='color: #f32020'>";
         echo $msg;
         echo"</p>";
      }
      foreach ($_COOKIE as $key => $value) {
          // Set the cookie's value to an empty string and expire it
          setcookie($key, '', time() - 3600);
      }
  }
?>
<form action="done.php" method="POST" enctype="multipart/form-data">
    <label for="first_name">First Name:</label><br>
    <input type="text" id="first_name" name="first_name" required><br>

    <label for="last_name">Last Name:</label><br>
    <input type="text" id="last_name" name="last_name" required><br>

    <label for="address">Address:</label><br>
    <input type="text" id="address" name="address" required><br>

    <label for="country">Country:</label><br>
    <select id="country" name="country" required>
        <option value="Egypt">Egypt</option>
        <option value="Italy">Italy</option>
        <option value="England">England</option>
    </select><br>

    <label>Gender:</label><br>
    <input type="radio" id="male" name="gender" value="male" required>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" required>
    <label for="female">Female</label><br>

    <label for="department">Dept:</label><br>
    <input type="text" class="notChoice" readonly id="department" name="department" value="open source" required><br>

    <label for="username">User Name:</label><br>
    <input type="text" id="username" name="username" required><br>

    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" required><br>
    <input type="file" name="user_image" required>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
</body>
</html>
