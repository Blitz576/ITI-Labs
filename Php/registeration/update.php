<?php

//$file=fopen("data.txt","a");
//
//
//$data = [];
//foreach ($_POST as $key => $value) {
//    if (is_array($value)) {
//        $data[$key] = implode("-", $value);
//    } else {
//        $data[$key] = $value;
//    }
//}
//
//$dataPushed=implode(",",$data);
//
//if(filesize("data.txt")!=0)
//    fwrite($file,"\n".$dataPushed);
//else
//    fwrite($file,$dataPushed);
//
//header("Location: listEmployees.php");









//==========================================================



//connect to database
//$connection = new mysqli("localhost", "root", "", "test");
//
//if ($connection->connect_error) {
//    die("error in connection");
//}


require ("dbClass.php");

$db_cofig=new DB();



$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$address = $_POST['address'];
$country = $_POST['country'];
$gender = $_POST['gender'];
$department = $_POST['department'];
$username = $_POST['username'];
$password = $_POST['password'];
$user_id = $_POST['userId'];
$error = [];

if (strlen($first_name) < 2) {
    $error['fname'] = "invalid first name";
}

if (strlen($last_name) < 2) {
    $error['lname'] = "invalid last name";
}

$pattern = '/^\d{3}\s{1}[a-zA-Z]{4}\s{1}[a-zA-Z]{2}$/';
if (!preg_match($pattern, $address)) {
    $error['address'] = "invalid address. Format should be [3 digits] [4 characters] [2 characters]";
}

if(!filter_var($username,FILTER_VALIDATE_EMAIL)){
    $error['username']="invalid email type";

    //setcookie('email',"invalid email type");
}


if(strlen($password) < 3){
    $error['password']="too weak password";
}


if (count($error) == 0) {
//    $stm = $connection->prepare("UPDATE person SET fname=?, lname=?, address=?, country=?, gender=?, department=?, userName=?, password=? where id=?");
//    $stm->execute([$first_name, $last_name, $address, $country, $gender, $department, $username, $password, $user_id]);


    $db_cofig->updateTable("person","SET fname='{$first_name}', lname='{$last_name}', address='{$address}',country='{$country}', gender='{$gender}', department='{$department}', userName='{$username}', password='{$password}'","id=$user_id");

    //successfully updated
    header("Location:listEmployees.php");
}
else{
    //unsuccessful inserted
    foreach ($error as $key=>$msg){
        setcookie($key,$msg);
    }
    header("location:updateform.php");
}

