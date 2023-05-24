$(document).ready(() => {
    hideAllPlains();
    showPlain("btnApresentacao");
    $("#plainApresentacao").show();

    $("#iconX").hide();
    $("#iconBars").show();

    $(".nav-link").click((e) => {
        resetActives();
        const element = $(e.delegateTarget);
        element.addClass('active');
        showPlain(element[0].id);
    });

    /*$("#btnOpcoes").click(() => {
        $("#CONTEUDO").toggle();
        $("#OPCOES").toggle();

        $("#iconX").toggle();
        $("#iconBars").toggle();
    });*/

    function hideAllPlains() {
        $("#plainApresentacao").hide();
        $("#plainMatrizCurricular").hide();
        $("#plainCorpoDocente").hide();
        $("#plainInformacoes").hide();
    }

    function resetActives() {
        hideAllPlains();
        $(".nav-link").removeClass('active');
    }

    function showPlain(buttonId) {
        switch(buttonId) {
            case "btnApresentacao": $("#plainApresentacao").show(); break;
            case "btnMatrizCurricular": $("#plainMatrizCurricular").show(); break;
            case "btnCorpoDocente": $("#plainCorpoDocente").show(); break;
            case "btnInformacoes": $("#plainInformacoes").show(); break;
            default: hideAllPlains(); break;
        }
    }
    
});