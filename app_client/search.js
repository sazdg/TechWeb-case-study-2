$(document).ready(function () {

    //show search & table list
    showSearch();

    function showSearch() {
        var script = `
        <div class="container-fluid row" id="_search">
        <div class="container row">
            <span><strong>Cerca un prodotto con una parola chiave:</strong></span><br />
            <div class="input-group-addon mb-3">
                <input type="text" id="search_smth" placeholder="Cerca...">
            </div>
            <div class="input-group-btn">
                <button type="submit" class="btn btn-primary" id="send_search">CERCA</button>
            </div>
        </div></div>

        <!--TABELLA DEI PRODOTTI-->
        <div class="container-fluid row" id="_read">
            <div class="container row">
                <p><strong>Elenco di tutti i prodotti:</strong></p><br />
                <div class="table-responsive" id="Allproducts"></div>
            </div>
            <div id="risposta"></div>
        </div>`;

        $("#app").append(script);
    }

    $("#send_search").on("click", function () {
        var smth = $("#search_smth").val();
        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/search.php?smth=" + smth,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                var x = `
                <p class="container-fluid row" id="title">TECH WEB - CASE STUDY #2</p><br />
                <div class="container-fluid row">
                <div class="container row">
                <table class='table table-hover'>
                    <thead><tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Prezzo</th>
                        <th scope='col'>Categoria</th>
                        <th scope='col'>Azioni</th>
                    </tr>
                </thead><tbody>`;

                for (let i = 0; i < response.ris.length; i++) {

                    x += "<tr><td>" + response.ris[i].nome + "</td><td> " + response.ris[i].prezzo + "$</td><td>" + response.ris[i].categoria;

                    x += `</td><td>
                    <button type="button" class="btn btn-primary btn-sm" id="leggi" data-index="` + response.ris[i].id + `">Read</button>
                    <button type="button" class="btn btn-info btn-sm" id="modifica" data-index="` + response.ris[i].id + `">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" id="cancella" data-index="` + response.ris[i].id + `">X Delete</button>
                    </td></tr>`;
                }

                x += `</tbody></table></div>
                <div class="row" id="risposta"></div>
                <div class="row"><div class="container - fluid row"><a href = "./index.html" class="badge badge-success" >Torna alla home</a ></div ></div>`;

                $(document.body).html(x);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text)
            });
        return false;
    });
});