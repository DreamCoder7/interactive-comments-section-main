import "core-js";
import "regenerator-runtime";
import * as model from "./model.js";
import View from "./View/View.js";
import commentView from "./View/commentView.js";
import replyView from "./View/replyView.js";

console.log(model.state.comments);

const controlComment = function () {
  commentView.render(model.state.comments);
};

const controlReply = function (name) {
  model.state.comments.map((comment) => {
    if (name === comment.userName) {
      replyView.render(comment);
    }
  });
  // replyView.render(model.state.comments);
};

const init = function () {
  controlComment();
  replyView.addHundlerReply(controlReply);
  // controlReply();
};

init();
