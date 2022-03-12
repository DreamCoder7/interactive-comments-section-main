import "core-js";
import "regenerator-runtime";
import * as model from "./model.js";
import View from "./View/View.js";
import commentView from "./View/commentView.js";
import replyView from "./View/replyView.js";
// import deleteView from "./View/deleteView.js";

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

const init = function () {
  controlComment();
  replyView.addHundlerReply(controlReply);
  replyView.addHundlerReplied();
  replyView.render(model.state.comments[1].replies);
};

init();
