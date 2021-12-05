<?php
class Database {
    private $host = "localhost";
    private $nome = "tecweb2";
    private $username = "root";
    private $password = "";
    private $conn;

    public function getConnection(){
        $this->conn = null;
        try{
            $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->nome.";charset=utf8", $this->username, $this->password);
            
        }catch(PDOException $e){
            echo "fuck no-> " . $e->getMessage();
        }
        return $this->conn;
    }
}

?>