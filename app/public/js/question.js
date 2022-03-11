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
});