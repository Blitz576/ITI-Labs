<?php
$connection=new mysqli("localhost","root","","test");

if($connection->connect_error){
    die("error in connection");
}

$user_id=$_POST['username'];
$user_password=$_POST['password'];

$selected=$connection->query("select * from person where userName='$user_id' and password='$user_password'");

$dataReturned=$selected->fetch_assoc();

echo $selected->num_rows;

if(!($selected->num_rows > 0)){
    setcookie("login_error","invalid user name or passowrd");
    header("Location:loginForm.php?");

}
else {
    session_start();
    $_SESSION['username'] = "{$dataReturned['fname']}";
    header("Location:listEmployees.php");
}