const questions = document.querySelectorAll(".clickable");
const answers = document.querySelectorAll(".answer");
const grayArrow = document.querySelectorAll(".gray");
const redArrow = document.querySelectorAll(".red");

questions.forEach((question, indexPergunta) => {
    question.addEventListener("click", () => {

        turnOnOff(indexPergunta);
        closeOtherAnswers();

        function closeOtherAnswers() {
            answers.forEach((answer, indexResposta) => {
                if (indexResposta !== indexPergunta) {
                    answer.classList.remove("active");
                    grayArrow[indexResposta].classList.add("on");
                    redArrow[indexResposta].classList.remove("on");
                }
            });
        }
    })
})

function turnOnOff(indexPergunta) {
    answers[indexPergunta].classList.toggle("active");
    grayArrow[indexPergunta].classList.toggle("on");
    redArrow[indexPergunta].classList.toggle("on");
}