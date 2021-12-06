<?php
        //permessi di lettura dei file: tutti
        header("Access-Control-Allow-Origin: *");
        //il formato di risposta: json
        header("Content-Type: application/json; charset=UTF-8");
        //il metodo per la request: delete
        header("Access-Control-Allow-Methods: DELETE");
        include("../dataMgr/Database.php");
        include("../dataMgr/Prodotto.php");
        $database = new Database();
        $db = $database->getConnection();

        //istanza di prodotto
        $product = new Prodotto($db);

        $id_delete = $_GET["eliminare"];

        if (isset($id_delete)) {

            $product->setId($id_delete);

            if ($product->delete()) {
                echo json_encode(array("message" => "Il prodotto e' stato eliminato"));
               
            } else {
                echo json_encode(array("message" => "so sorry kid, il prodotto non e' stato eliminato"));
            }
        } else {
            json_encode(array("message" => $id_delete));
        }

?>