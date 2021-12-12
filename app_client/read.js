$(document).ready(function () {
    
    //subito chiamata al db per mostrare la tabella
    showTable();

    function showTable() {

        $.ajax({
            url: "../api_server/api/read.php",
            type: "GET",
            dataType: 'json'
        })
        .done(function (response) {
                var lista = `
                <table class='table table-hover'>
                    <thead><tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Prezzo</th>
                        <th scope='col'>Categoria</th>
                        <th scope='col'>Azioni</th>
                    </tr>
                </thead><tbody>`;

                var len = response.products.length;
                for (let i = 0; i < len; i++) {
                    
                    var id = response.products[i].id;
                    var nome = response.products[i].name;
                    var prezzo = response.products[i].price;
                    var categoria = response.products[i].category_name;

                    lista += "<tr><td>" + id + "</td><td>" + nome + "</td><td> " + prezzo + "$</td><td>" + categoria;

                    lista += `</td><td>
                    <button type="button" class="btn btn-primary btn-sm" id="leggi" data-index="` + id + `">Read</button>
                    <button type="button" class="btn btn-info btn-sm" id="modifica" data-index="` + id + `">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" id="cancella" data-index="` + id + `">X Delete</button>
                    </td></tr>`;
                }
                //ADD CUSTOM ATTRIBUTE TO THE BUTTONS 
                lista += "</tbody></table>";
                $("#Allproducts").html(lista);
            })
        .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
                $("#Allproducts").html(xhr + resp + text);
            });
        return false;//necessario per far funzionare on click
    };
});