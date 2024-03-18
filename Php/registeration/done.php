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
//$connection=new mysqli("localhost","root","","test");
//
//if($connection->connect_error){
//    die("error in connection");
//}


require ("dbClass.php");

$db_cofig=new DB();

$first_name=clearData($_POST['first_name']);
$last_name=clearData($_POST['last_name']);
$address=clearData($_POST['address']);
$country=clearData($_POST['country']);
$gender=clearData($_POST['gender']);
$department=clearData($_POST['department']);
$username=clearData($_POST['username']);
$password=clearData($_POST['password']);
$file=$_FILES["user_image"];

$error=[];
//validations
if(strlen($first_name) < 2){
    $error['fname']="invalid first name";
}

if(strlen($last_name) < 2){
    $error['lname']="invalid last name";
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



if(count($error)==0) {
//    $stm = $connection->prepare("INSERT INTO person (fname, lname, address, country, gender, department, userName, password,file_name)
//VALUES (?, ?, ?,?, ?, ?, ?, ?,?)");
//
//    $stm->execute([$first_name, $last_name, $address, $country, $gender, $department, $username, $password,$file['name']]);

 $db_cofig->insertInto('person',"(fname, lname, address, country, gender, department, userName, password,file_name)","('{$first_name}', '{$last_name}', '{$address}', '{$country}', '{$gender}', '{$department}', '{$username}', '{$password}','{$file['name']}')");


    move_uploaded_file($file['tmp_name'], './images/' . $file['name']);

//successfully inserted
   session_start();
   $_SESSION['username']="$first_name";
    header("Location:listEmployees.php");
}
else{
    //unsuccessful inserted
    foreach ($error as $key=>$msg){
        setcookie($key,$msg);
    }
    header("location:registerform.php");
}



//functions
function clearData($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}
