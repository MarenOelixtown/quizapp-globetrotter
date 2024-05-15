const formQuestionInput = document.querySelector('[data-js="question-input"]');
const formAnswerInput = document.querySelector('[data-js="answer-input"]');
const maxLengthQuestion = formQuestionInput.getAttribute("maxlength");
const maxLengthAnswer = formAnswerInput.getAttribute("maxlength");
const amountLeftQuestion = document.querySelector(
  '[data-js="questionAmountLeft"]'
);
const amountLeftAnswer = document.querySelector('[data-js="answerAmountLeft"]');

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.textContent = value;
};
updateAmountLeftQuestion(maxLengthQuestion);

formQuestionInput.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - formQuestionInput.value.length);
});

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.textContent = value;
};
updateAmountLeftAnswer(maxLengthAnswer);

formAnswerInput.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - formAnswerInput.value.length);
});
