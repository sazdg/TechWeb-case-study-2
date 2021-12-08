<?php

include("../dataMgr/Database.php");
include("../dataMgr/Prodotto.php");
$database = new Database();
$db = $database->getConnection();

$product = new Prodotto($db);
$id = $_GET["id"]; 
$product->setId($id);
$result = $product->readOne();//questo restituisce una var, dove la metto?

$conta = $result->rowCount();


if($conta > 0){
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        $oggetto = array(
            "id" => $row["id"],
            "nome" => $row["nome"],
            "descrizione" => $row["descrizione"],
            "prezzo" => $row["prezzo"]
        );
    }
    echo json_encode($oggetto);
} else {
    echo json_encode(array("message" => "nope"));
}

?>