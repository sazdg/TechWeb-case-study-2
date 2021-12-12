$(document).ready(function () {

    //tasto Crea un nuovo prodotto
    showCreate();

    function showCreate(){
        var script = `
        <div class="container-fluid" id="_create">
            <button type="button" class="btn btn-primary" id="openform">Crea un nuovo prodotto</button>
            <br />
        </div>`;

        $("#app").append(script);
    }

    var form = `
    <p class="container-fluid row" id="title">TECH WEB - CASE STUDY #2</p><br />
    <div class="container-fluid row">
    <div class="container-fluid row">
            <span>Nome:</span><br />
            <input type="text" name="new_item" id="new_item"><br />
            <span>Descrizione:</span><br />
            <input type="text" name="descrizione" id="descrizione"><br />
            <span>Prezzo:</span><br />
            <input type="text" name="prezzo" id="prezzo"><br />
            <span>Categoria id: 1(tex) 2(dylan dog) 3(topolino):</span><br />
            <input type="text" name="cat_id" id="cat_id"><br />
            <button type="submit" class="btn btn-primary" id="create">Aggiungi</button>
        </div>
        <div class="container-fluid risp row" id="response_create"></div>
        <div class="container-fluid row">
            <a href="./index.html" class="badge badge-success">Torna alla home</a></div></div>`;

    $(document).on("click", "#openform", function () {
        $(document.body).html(form);
    });

    $(document).on("click", "#create", function () {

        var lista1 = {
            item: $("#new_item").val(),
            descrizione: $("#descrizione").val(),
            prezzo: $("#prezzo").val(),
            cat_id: $("#cat_id").val()
        };

        let listaJson = JSON.stringify(lista1);

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/create.php",
            type: "POST",
            contentType: 'application/json', // formato dei dati della request
            dataType: "json",
            data: listaJson
        })
            .done(function (datas) {
                risp = "<p>" + datas.message + "</p>";
                $("#response_create").html(risp);
            })
            .fail(function (xhr, resp, text) {
                console.log(text);
            });
        return false;
    });

});