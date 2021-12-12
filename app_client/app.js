$(document).ready(function () {

    //IMPORTANT use this ` ` to insert block of html inside a var
    var home = `
    <div class="container-fluid row" id = "consegna" >
        Descrizione negozio di fumetti tipo: <br /> 
        <strong>backend:</strong> i dati del database,
        i servizi sono nella cartella api(-create, -delete, -read, -read.one, -update, -search) <br />
        fare il controllo delle variabili<br/ >
        <strong>frontend:</strong> index html<br />
        le chiamate ajax sono nella cartella frontend, file js
    </div >`;

    $("#app").html(home);
    //testo per la home

    $("#update").on("click", function () {

        var dati = {
            id: $("#id_vecchio").val(),
            nome: $("#nome_nuovo").val()
        };

        let datiJson = JSON.stringify(dati);

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/update.php",
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: datiJson
        })
            .done(function (response) {
                risultato = "<p>" + response.message + "</p>";
                //non funge
                $("#response_update").html(risultato);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });

});
