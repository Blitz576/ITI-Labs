<?php
//connect to database
//$connection=new mysqli("localhost","root","","test");
//
//if($connection->connect_error){
//    die("error in connection");
//}

require ("dbClass.php");
$db_config=new DB();



$user_id=$_GET['userId'];

$selected=$db_config->selectFromTable("person","id=$user_id");

foreach ($selected->fetch_assoc() as $key=>$data){

    if($key == "file_name"){
        echo "<img src='./images/{$data}'/>";
    }
     else {
         echo "<p>";
         echo $data;
         echo "</p>";
     }
}