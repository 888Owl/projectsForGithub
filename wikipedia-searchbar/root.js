$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var message = $("#search-bar").val();
        var url =
            "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
            message +
            "&limit=10&namespace=0&format=json&callback=?";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            async: true,
            success: function (data) {
                $('#reciever').empty();
                for (var i = 0; i < data[1].length; i++) {
                    $('#reciever').append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                };
                $("#search-bar").val(" ");
            },
            error: function (errorMessage) {
                alert("Error: " + errorMessage);
            }
        });
        $("#search-bar").keyup(function (enter) {
            if (enter.which == 13) {
                $("#search-bar").click();
            }
        });
    });
});