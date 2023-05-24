$(document).ready(() => {
    showPlain("btnApresentacao");
    $("#OPCOES").hide();
    $("#CONTEUDO").show();

    $("#iconX").hide();
    $("#iconBars").show();

    $(".nav-link").click((e) => {
        resetActives();
        const element = $(e.delegateTarget);
        element.addClass('active');
        showPlain(element[0].id);
    });

    $("#btnOpcoes").click(() => {
        $("#CONTEUDO").toggle();
        $("#OPCOES").toggle();

        $("#iconX").toggle();
        $("#iconBars").toggle();
    });

    function showPlain(buttonId) {
        switch(buttonId) {
            case "btnApresentacao": $("#plainApresentacao").show(); break;
            case "btnMatrizCurricular": $("#plainMatrizCurricular").show(); break;
            case "btnCorpoDocente": $("#plainCorpoDocente").show(); break;
            case "btnInformacoes": $("#plainInformacoes").show(); break;
            default: $(".tab-plain").hide(); break;
        }
    }

    function resetActives() {
        $(".tab-plain").hide();
        $(".nav-link").removeClass('active');
    }
});