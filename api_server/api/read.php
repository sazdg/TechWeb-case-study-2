<?php
//stabilisco i permessi di lettura del file (anyone) ???
header("Access-Control-Allow-Origin: *");
//definisco il formato della risposta (json)
header("Content-Type: application/json; charset=UTF-8");

include("../dataMgr/Database.php");
include("../dataMgr/Prodotto.php");

$database = new Database();
$db = $database->getConnection();

$product = new Prodotto($db);
$recordset = $product->read();//recordset

//i dati vengono estratti e convertiti in json
$conta = $recordset->rowCount();
 
if($conta > 0){
    $lista_prodotti = array();
    //dentro l'array si crea un key products contenente un altro array
    $lista_prodotti["products"] = array();

    while($row = $recordset->fetch(PDO::FETCH_ASSOC)){
        $prodotto = array(
            "id" => $row["id"],
            "name" => $row["nome"],
            "price" => $row["prezzo"]
        );
        //oggetto array, con le specifiche di 1 oggetto, si aggiunge all'array products dentro l'array originale lista_prodotti
        array_push($lista_prodotti["products"], $prodotto);
    }
    http_response_code(200);
    //trasformo la coppia products in un oggtto JSON vero e lo invio in http response
    echo json_encode($lista_prodotti);
    
} else {
    http_response_code(404);
    echo json_encode(array("message" => "no products found"));
}
?>