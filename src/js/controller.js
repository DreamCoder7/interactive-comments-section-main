import "core-js";
import "regenerator-runtime";
import * as model from "./model.js";
import View from "./View/View.js";
import commentView from "./View/commentView.js";
import replyView from "./View/replyView.js";
import repliedView from "./View/repliedView.js";
import sendView from "./View/sendView.js";
import deleteView from "./View/deleteView.js";
import editView from "./View/editView.js";
console.log(commentView);

const controlComment = function () {
  commentView.render(model.state.comments);
};

const controlReply = function (name) {
  model.state.comments.map((comment) => {
    if (name.textContent === comment.userName) {
      name
        .closest(".comments__list--cont")
        .querySelector(".comment__reply")
        .classList.remove("hidden");
    }
  });

  commentView.addHundlerVote();
};

const controlReplied = function (inputValue) {
  model.state.comments[0].replies.push(inputValue.value);

  const start = inputValue.value.indexOf("@");
  const end = inputValue.value.indexOf(" ");

  model.state.comments[0].content = inputValue.value.substring(end);
  model.state.comments[0].replyingTo = inputValue.value.substring(start, end);

  repliedView.render(model.state.comments[0]);
};

const controlReplies = function () {
  model.state.comments.map((comment) => {
    if (comment.replies.length !== 0) {
      comment.replies.forEach((reply) => {
        repliedView.render(reply);
      });
    }
  });
};

const controlSend = function (inputText, parentEl) {
  model.state.comments[0].content = inputText.value;

  parentEl.insertAdjacentHTML(
    "beforebegin",
    sendView.generateSendMarkup(model.state.comments[0])
  );
  inputText.value = "";
};

const controlEdit = function (parentEl, inputValue) {
  parentEl.insertAdjacentHTML("beforeend", editView.editMarkup());

  const input = document.querySelector(".update--input");
  input.value = inputValue.textContent;
};

const controlUpdate = function (parentEl, inputValue) {
  parentEl.insertAdjacentHTML(
    "beforeend",
    editView.updateMarkup(inputValue.value)
  );
};

const controlDelete = function () {
  // console.log(parent);
  deleteView.togglePopup();
};

const controlVote = function () {
  // const score = value.closest(".item__vote--num");
  // if (value.closest(".item__up--vote")) {
  //   +score.textContent++;
  // } else if (value.closest(".item__down--vote")) {
  //   +score.textContent--;
  // }
};

const init = function () {
  controlComment();
  controlReplies();
  sendView.render();

  replyView.addHundlerReply(controlReply);
  repliedView.addHundlerReplied(controlReplied);
  sendView.addHundlerSend(controlSend);

  deleteView.addHundlerDeleteReplied(controlDelete);
  deleteView.addHundlerCancelDelete(controlDelete);

  editView.addHundlerEditReplied(controlEdit);
  editView.addHundlerUpdate(controlUpdate);

  // commentView.addHundlerVote(controlVote);
};

init();
