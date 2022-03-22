import "core-js";
import "regenerator-runtime";
import * as model from "./model.js";
import View from "./View/View.js";
import moment from "moment";
import commentView from "./View/commentView.js";
import replyView from "./View/replyView.js";
import repliedView from "./View/repliedView.js";
import sendView from "./View/sendView.js";
import deleteView from "./View/deleteView.js";
import editView from "./View/editView.js";

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
};

const replied = function (inputValue, data) {
  data.replies.push(inputValue.value);

  const start = inputValue.value.indexOf("@");
  const end = inputValue.value.indexOf(" ");

  data.content = inputValue.value.substring(end);
  data.replyingTo = inputValue.value.substring(start, end);
  return model.state.comments[0];
};

const controlReplied = function (inputValue, parentEl) {
  model.relativeTime(moment());
  parentEl.insertAdjacentHTML(
    "beforeend",
    repliedView.repliedMarkup(replied(inputValue, model.state.comments[0]))
  );
};

const controlReplies = function () {
  model.state.comments.map((comment) => {
    if (comment.replies.length !== 0) {
      comment.replies.forEach((reply) => {
        document
          .querySelector(".comments__list")
          .insertAdjacentHTML("beforeend", repliedView.repliedMarkup(reply));
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

const controlSendReplied = function (inputValue, parentEl) {
  parentEl.insertAdjacentHTML(
    "beforeend",
    repliedView.repliedMarkup(replied(inputValue, model.state.comments[0]))
  );
};

const controlInput = function () {
  const parentEl = document.querySelector(".comments__list");
  parentEl.insertAdjacentHTML("afterend", sendView.generateInputMarkup());
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
  deleteView.togglePopup();
};

const init = function () {
  controlComment();

  controlReplies();
  controlInput();

  replyView.addHundlerReply(controlReply);
  repliedView.addHundlerReplied(controlReplied);
  sendView.addHundlerSendReplied(controlSendReplied);
  sendView.addHundlerSend(controlSend);

  deleteView.addHundlerDeleteReplied(controlDelete);
  deleteView.addHundlerCancelDelete(controlDelete);

  editView.addHundlerEditReplied(controlEdit);
  editView.addHundlerUpdate(controlUpdate);

  commentView.addHundlerUpVote();
  sendView.addHundlerSendUpVote();
};
init();

console.log("log");
