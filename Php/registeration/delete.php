<?php


//connect to database
//
//$connection=new mysqli("localhost","root","","test");
//
//if($connection->connect_error){
//    die("error in connection");
//}

require ("dbClass.php");

$db_cofig=new DB();




$user_id=$_GET['userId'];

$db_cofig->deleteFromTable("person","id=$user_id");



//redirection

header("location: listEmployees.php");