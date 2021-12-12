$(document).ready(function () {

    //chiamata ajax per leggere 1 prodotto
    //chiamata ajax per inviare i dati e modificare il prodotto 

    $(document).on("click", "#modifica", function () {

        var ricorda = $(this).attr("data-index");

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/readone.php?id=" + ricorda,
            type: "GET",
            dataType: "json"
        })
        .done(function(response){
            var html = `
            <div class="container-fluid row">
                <div class="container row">
                <table class="table table-hover">
                    <thead><tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col">Prezzo</th>
                        <th scope="col">Categoria</th>
                    </tr>
                </thead><tbody>`;

            html += "<tr><td>" + response.id + "</td><td>" + response.nome + "</td><td>" + response.descrizione + "</td><td>" + response.prezzo + "</td><td>" + response.categoria + "</td></tr></tbody></table></div></div>";

            $("#bho").html(html);
        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
        });
        //return false;

        function showUpdate() {
            var script = ` 
        <p class="container-fluid row" id="title">TECH WEB - CASE STUDY #2</p><br />
        <div class="container-fluid" id="_update">

        <div id="bho"></div>

        <span><strong>Aggiorna le informazioni del prodotto, riempi tutti i campi:</strong></span><br />
        <div class="container row">
            <span>Nome:</span><br />
            <input type="text" id="nome"><br />
            <span>Descrizione:</span><br />
            <input type="text" id="desc"><br />
            <span>Prezzo:</span><br />
            <input type="text" id="pr"><br />
            <span>Categoria:</span><br />
            <input type="text" id="cat"><br />
            <button type="button" class="btn btn-primary" id="sendUpdate">Aggiorna</button>
        </div>
        <div id="risposta"></div>
        <div class="container row"><div class="container-fluid row">
            <a href="./index.html" class="badge badge-success">Torna alla home</a></div></div>`;

            $(document.body).html(script);
        }

        
        showUpdate();


        $(document).on("click", "#sendUpdate", function () {

            var dati = {
                id: ricorda,
                nome: $("#nome").val(),
                descrizione: $("#desc").val(),
                prezzo: $("#pr").val(),
                categoria: $("#cat").val(),
            }

            let datiJson = JSON.stringify(dati);

            console.log(dati);
            console.log(datiJson);

            $.ajax({
                url: "http://localhost/cime/case-study-2/api_server/api/update.php",
                type: "PUT",
                contentType: "application/json",
                dataType: "json",
                data: datiJson
            })
                .done(function (response) {
                    risultato = "<div class='container-fluid row'><p>" + response.message + "</p></div>";

                    $("#risposta").html(risultato);
                })
                .fail(function (xhr, resp, text) {
                    console.log(xhr, resp, text);
                });
            return false;
        });
    });
});