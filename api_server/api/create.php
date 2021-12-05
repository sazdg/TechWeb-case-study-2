<!DOCTYPE html>
<html>
    <head>
        <title>PHP case study 2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="case study #2" />
        <meta name="author" content="saz" />
        <link rel="stylesheet" href="../../app_client/stile/stile.css">
        <!--JQuery CDN-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    </head>
    <body>  
        <p id="title">CREAZIONE DI UN PRODOTTO</p>
        <br/>
        <?php
        include("../dataMgr/Database.php");
        $database = new Database();
        $db = $database->getConnection();
        //$db è la var del database

        $item = $_GET["new_item"];
        $descrizione = $_GET["descrizione"];
        $prezzo = $_GET["prezzo"];
        $cat_id = $_GET["cat_id"];
        $id = 0;

        include("../dataMgr/Prodotto.php");
        $product = new Prodotto($db);//oppure $database
        $product->create($item, $descrizione, $prezzo, $cat_id);
        ?>
    </body>
</html>