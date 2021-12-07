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

    public function setId($id){
        $this->id = $id;
    }

    //servizio di lettura di tutti i prodotti - chiamata ajax
    public function read(){
        $query = "SELECT * FROM prodotti";

        //preparare ed eseguire
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        //recordset
        return $stmt;
    }

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
        
            $query = $this->conn->prepare("INSERT INTO prodotti(id, nome, descrizione, prezzo, cat_id) VALUES (:id, :item, :descrizione, :prezzo, :cat_id)");

            $query->execute([
                "id" => $id,
                "item" => $prod,
                "descrizione" => $desc,
                "prezzo" => $prezzo,
                "cat_id" => $cat_id,
            ]);
            //MANCA sanificare i dati
            return $query;
            //restituisce true, entra nell'if true, manda il messaggio json con echo 


    }
    //servizio di aggiornamento dei dati di un prodotto
    public function update($num, $nominativo){
        $q = "UPDATE prodotti SET nome = :nominat WHERE id = :num";
        $zzz = $this->conn->prepare($q);
        
        
        $zzz->execute([
            "num" => $num,
            "nominat" => $nominativo,
        ]);

        return $zzz;
    }
    //servizio di cancellazione di un prodotto 
    public function delete(){
        $query = "DELETE FROM prodotti where ID = ?";

        $stmt = $this->conn->prepare($query);
        //invio il valore per il parametro
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        return $stmt;
    }
    //servizio di ricerca prodotti per keyword
}
?>