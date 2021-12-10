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


    $("#readOne").on("click", function () {
        var leggi = $("#leggi_id").val();

        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/readone.php?id=" + leggi,
            type: "GET",
            dataType: "json",
        })
            .done(function (response) {
                var r = "<p>" + response.id + "<br/>" + response.nome + "<br/>" + response.descrizione + "<br/>" + response.prezzo + "</p>";

                $("#show_one").html(r);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });

    $("#send_search").on("click", function () {
        var smth = $("#search_smth").val();
        $.ajax({
            url: "http://localhost/cime/case-study-2/api_server/api/search.php?smth=" + smth,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                var x = `
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
                    <button type="button" class="btn btn-primary btn-sm">Read</button>
                    <button type="button" class="btn btn-info btn-sm">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm">X Delete</button>
                    </td></tr>`;
                }

                x += "</tbody></table>";

                $("#show_search").html(x);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text)
            });
        return false;
    });

    /*  $("#create").on("click", function () {
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
                  risp = "<p>" + datas.message + "</p><br/>";
                  $("#response_create").html(risp);
              })
              .fail(function (xhr, resp, text) {
                  console.log(text);
              });
          return false;
      });
  */
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


    $("#delete").on("click", function () {

        var id_elimina = $("#eliminare").val();
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
