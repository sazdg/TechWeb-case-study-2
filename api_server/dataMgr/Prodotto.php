<?php
class Prodotto {
    //connessione inizializzata nel costruttore
    private $conn;
    //proprietà del prodotto 
    public $id;
    public $name;
    public $description;
    public $price;
    public $category_id;
    public $category_name;

    public function __construct($db){
        $this->conn = $db;
        $ok = "ok";
        return $ok;
    }

    public function getName(){
        return $this->name;
    }

    public function setName($name_par){
        $this->name = $name_par;
    }

    //servizio di lettura di tutti i prodotti
    //servizio di letura di un prodotto, dato il suo id
    //servizio di inserimento di un nuovo prodotto
    public function create($prod, $desc, $prezzo, $cat_id){
        //query per l'id
        $temp = $this->conn->query("SELECT id FROM prodotti ORDER BY id DESC LIMIT 1");

        //calcolo id automatico
        while($result = $temp->fetch(PDO::FETCH_ASSOC)){
            //vecchio id + 1 
            $id = $result["id"] + 1;
            //echo $id . " -> calcolo id avvenuto con successo<br/>";
        }

        try{
            $query = $this->conn->prepare("INSERT INTO prodotti(id, nome, descrizione, prezzo, cat_id) VALUES (:id, :item, :descrizione, :prezzo, :cat_id)");

            $query->execute([
                "id" => $id,
                "item" => $prod,
                "descrizione" => $desc,
                "prezzo" => $prezzo,
                "cat_id" => $cat_id,
            ]);

            echo " Operazione avvenuta con successo: creazione di un nuovo prodotto " . $prod;
            
        } catch (PDOException $e){
            echo " Failed, so sorry ". $e->getMessage();
        }

    }
    //servizio di aggiornamento dei dati di un prodotto
    //servizio di cancellazione di un prodotto 
    //servizio di ricerca prodotti per keyword
}
?>