$(document).ready(function () {
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
                for (let i = 0; i < response.products.length; i++) {
                    var id = response.products[i].id;
                    var nome = response.products[i].name;
                    var prezzo = response.products[i].price;
                    var categoria = response.products[i].category_name;

                    lista += "<tr><td>" + id + "</td><td>" + nome + "</td><td> " + prezzo + "$</td><td>" + categoria;

                    lista += `</td><td>
                    <button type="button" class="btn btn-primary btn-sm">Read</button>
                    <button type="button" class="btn btn-info btn-sm">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm">X Delete</button>
                    </td></tr>`;
                }
                lista += "</tbody></table>";
                $("#AllProducts").html(lista);
            })
        .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
                $("#AllProducts").html(xhr + resp + text);
            });
        return false;//necessario per far funzionare on click
    };
});