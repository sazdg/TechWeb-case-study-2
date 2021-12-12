$(document).ready(function () {
    //collegato a read.js

    $(document).on("click", "#cancella", function () {
        //si aggiunge un attributo personale al bottone "cancella", il quale contiene l'id selezionato da passare. è troppo difficile selezionare la casella giusta con jquery

        var id_elimina = $(this).attr("data-index");
        //console.log(id_elimina + "-- attributo selezionato");
        var result = confirm("Sei sicuro di voler cancellare il numero " + id_elimina + "??");

        if (result == true) {
            $.ajax({
                url: "http://localhost/cime/case-study-2/api_server/api/delete.php?eliminare="
                    + id_elimina,
                //sembra una finta get, c'è l'url ma non c'è il method e non c'è il form
                type: "DELETE",
                dataType: 'json',

            })
                .done(function (response) {
                    html_par = "<div class='container-fluid row'><p>" + response.message + "</p></div>";
                    html_par += `<div class="container-fluid row">
                        <a href="./index.html" class="badge badge-primary">Aggiorna tabella</a></div>`;

                    $("#risposta").html(html_par);
                })
                .fail(function (xhr, resp, text) {
                    console.log(xhr, resp, text);
                });
            return false;

        } else {
            console.log("hai cliccato no - false");
        }

    });
});