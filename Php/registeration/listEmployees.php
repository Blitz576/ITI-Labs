<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>listEmployee</title>
</head>
<body>
<table border="2">

    <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>country</th>

      </tr>
    </thead>

    <?php
    //connect to database
    $connection=new mysqli("localhost","root","","test");


    session_start();
    if(isset($_SESSION['username'])){
        echo "<p>";
        echo "hi ya ";
        echo $_SESSION['username'];
        echo "</p>";
        unset($_SESSION['username']);
    }else
    {
        header("Location:loginForm.php");
    }


    if($connection->connect_error){
        die("error in connection");
    }

    $selected=$connection->query("select * from person");
    while($row=$selected->fetch_assoc()){
        echo "<tr>";
        echo "<td>{$row['fname']}</td>";
        echo "<td>{$row['lname']}</td>";
        echo "<td>{$row['address']}</td>";
        echo "<td>{$row['country']}</td>";
        echo "<td><a href='updateform.php?userId={$row['id']}'>update</a></td>";
        echo "<td><a href='view.php?userId={$row['id']}'>view</a></td>";
        echo "<td><a href='delete.php?userId={$row['id']}'>delete</a></td>";
        echo "</tr>";
    }

    ?>

</table>
</body>
</html>