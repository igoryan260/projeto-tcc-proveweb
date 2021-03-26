$(document).ready(function() {

    $("#abrirModal").click(function() {

        var form = new FormData($("#formModoPagamento")[0]);

        $.ajax({
            type: "post",
            url: "#",
            data: form,
            dataType: "json",
            timeout: 8000,
            cache: false,
            processData: false,
            contentType: false,
            success: function(result) {

            }
        });

    });
});