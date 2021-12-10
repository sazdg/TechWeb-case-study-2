<?php
include("../dataMgr/Database.php");
include("../dataMgr/Prodotto.php");
$database = new Database();
$db = $database->getConnection();

$product = new Prodotto($db);
$smth = $_GET["smth"];

$product->setName($smth);
$product->setDescr($smth);

$risultato = $product->search();//return records
if($risultato){
    $risultati_ricerche = array();
    $risultati_ricerche["ris"] = array();
    while($row = $risultato->fetch(PDO::FETCH_ASSOC)){
        $p = array(
            "id" => $row["id"],
            "nome" => $row["nome"],
            "descrizione" => $row["descrizione"],
            "prezzo" => $row["prezzo"],
            "categoria" => $row["cat_id"]
        );
        array_push($risultati_ricerche["ris"], $p);
    }
    echo json_encode($risultati_ricerche);
} else {
    echo "tr again";
}
?>