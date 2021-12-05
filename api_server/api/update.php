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
    <?php
    //updare
    include("../dataMgr/Database.php");
    $database = new Database();
    $db = $database->getConnection();

    $id_vecchio = $_GET["id_vecchio"];
    $nome_nuovo = $_GET["nome_nuovo"];

    echo $id_vecchio . $nome_nuovo;

    include("../dataMgr/Prodotto.php");
    $product = new Prodotto($db);
    $product->update($id_vecchio, $nome_nuovo);
    ?>
</body>
</html>