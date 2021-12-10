$(document).ready(function () {

    var prova = `
        <p><strong>Database test:</strong></p>

        <form action="../api_server/api/test.php" method="get">
            <input type="submit" value="Test" class="btn btn-primary">
        </form>`;

    $("#_test").html(prova);

});