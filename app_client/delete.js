$(document).ready(function () {

    $(document).on("click", "#cancella", function () {
        //si aggiunge un attributo personale al bottone cancella, il quale contiene l'id selezionato da passare. è troppo difficile selezionare la casella giusta con jquery
        var id_elimina = $(this).attr("data-index");
        //console.log(id_elimina + "-- attributo selezionato");

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/delete.php?eliminare="
                + id_elimina,
            //sembra una finta get, c'è l'url ma non c'è il method e non c'è il form
            type: "DELETE",
            dataType: 'json',

        })
            .done(function (response) {
                html_par = "<p>" + response.message + "</p>";
                $("#response_delete").html(html_par);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });

});