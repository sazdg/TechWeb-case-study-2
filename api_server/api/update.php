<?php
    //updare
    include("../dataMgr/Database.php");
    include("../dataMgr/Prodotto.php");
    $database = new Database();
    $db = $database->getConnection();

    $dati = json_decode(file_get_contents("php://input"));
    
    $product = new Prodotto($db);
    if($product->update($dati->id, $dati->nome, $dati->descrizione, $dati->prezzo, $dati->categoria)){
        echo json_encode(array("message" => "Operazione avvenuta con successo"));
    } else {
        echo json_encode(array("message" => "Ops, errore"));
    }
?>
