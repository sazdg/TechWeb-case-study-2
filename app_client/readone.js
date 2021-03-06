$(document).ready(function () {


    $(document).on("click", "#leggi", function () {

        var leggi = $(this).attr("data-index");

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/readone.php?id=" + leggi,
            type: "GET",
            dataType: "json",
        })
            .done(function (response) {

                var script = `
                <p class="container-fluid row" id="title">TECH WEB - CASE STUDY #2</p><br />
                <div class="container-fluid row">
                <div class="container row">
                <table class="table table-hover">
                    <thead><tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>
                        <th scope="col">Prezzo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Azioni</th>
                    </tr>
                </thead><tbody>`;

                script += "<tr><td>" + response.id + "</td><td>" + response.nome + "</td><td>" + response.descrizione + "</td><td>" + response.prezzo + "</td><td>" + response.categoria + "</td>";

                script += `
                </td><td>
                    <button type="button" class="btn btn-info btn-sm" id="modifica" data-index="` + response.id + `">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" id="cancella" data-index="` + response.id + `">X Delete</button>
                    </td></tr></tbody></table></div>
                    <div class="table-responsive" id="products_response"></div>
                    <div class="row" id="risposta"></div>
                <div class="row"><div class="container-fluid row">
                <a href="./index.html" class="badge badge-success">Torna alla home</a></div></div>`;

                //document.write returns console warning
                $(document.body).html(script);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });
});