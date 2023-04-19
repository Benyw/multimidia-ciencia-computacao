$(document).ready(() => {
    $(".tab-area").click((e) => {
        resetActives();
        const element = $(e.delegateTarget);
        element.addClass('active');
        showPlain("btnApresentacao");
    });

    function showPlain(buttonId) {
        console.log(buttonId);
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
        $(".tab-area").removeClass('active');
    }
});