$(document).on('ready', () => {
    $("#answer-text").hide();
    let answerShown = false;

    $("#reveal-answer").on('click', () => {
        if (!answerShown) {
            $("#answer-text").show();
            $("#reveal-answer").val("Hide Answer");
        } else {
            $("#answer-text").hide();
            $("#reveal-answer").val("Reveal Answer");
        }

        answerShown = !answerShown;
    });

    $("#correct").on('click', () => {
        let idx = document.getElementsByTagName("title")[0].innerHTML;
        let data = {"idx": idx, "status": "correct"};

        swal_ajax_post("/question/correct", data);
    });
});