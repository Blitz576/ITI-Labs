<?php
class DB
{
    private $hostname;
    private $username;
    private $password;
    private $database;
    private $connection=null;
    public function __construct()
    {
        $this->hostname="localhost";
        $this->username="root";
        $this->password="";
        $this->database="test";

        $this->connection=new mysqli($this->hostname,$this->username,$this->password,$this->database);
    }
    function insertInto($tableName,$columns,$values)
    {
        if($this->connection->connect_error){
            die("error in connection");
        }
        echo "INSERT INTO $tableName $columns VALUES $values";
        $this->connection->query("INSERT INTO $tableName $columns VALUES $values");
    }

    function deleteFromTable($tableName,$condition)
    {
        if($this->connection->connect_error){
            die("error in connection");
        }

        $this->connection->query("DELETE FROM $tableName WHERE $condition");
    }

    function selectFromTable($tableName,$condition)
    {
        if($this->connection->connect_error){
            die("error in connection");
        }
        return $this->connection->query("SELECT * FROM $tableName WHERE $condition");

    }

    function updateTable($tableName,$query,$condition){
        if($this->connection->connect_error){
            die("error in connection");
        }
        echo "UPDATE $tableName $query WHERE $condition";
        $this->connection->query("UPDATE $tableName $query WHERE $condition");
    }

}