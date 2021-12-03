<?php
include_once("./dataMgr/Database.php");

//creare una connessione al DBMS
$database = new Database();
$db = $database->getConnection();

$rs = $db->query("SELECT * FROM prodotti");
while($record = $rs->fetch(PDO::FETCH_ASSOC)){
    echo $record["nome"] . "<br/>";
}
?>