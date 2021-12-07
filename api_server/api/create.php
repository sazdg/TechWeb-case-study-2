    <?php
        include("../dataMgr/Database.php");
        include("../dataMgr/Prodotto.php");
        $database = new Database();
        $db = $database->getConnection();
        //$db è la var del database

        //to read raw post data, read-only
        $lista = json_decode(file_get_contents("php://input"));
        //var_dump($lista);
        //echo $lista->item;

        $product = new Prodotto($db);//oppure $database
        if($product->create($lista->item, $lista->descrizione, $lista->prezzo, $lista->cat_id)){
            echo json_encode(array("message" => "Operazione avvenuta con successo, aggiunto un nuovo elemento"));
        } else {
            echo json_encode(array("message" => "Ops, errore"));
        }
    ?>
