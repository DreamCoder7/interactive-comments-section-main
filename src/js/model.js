import data from "../json/data.json";
import moment from "moment";
import { locale } from "core-js";

export const state = {
  comments: [],
  currentUser: [],
};
console.log(state);

export const getJSON = function () {
  state.comments = data.comments.map((comment) => {
    return {
      content: comment.content,
      createdAt: comment.createdAt,
      id: comment.id,
      score: comment.score,
      userImage: comment.user.image,
      userName: comment.user.username,
      replies: comment.replies,
      //   ...(comment.replies !== 0 && { replies: comment.replies }),
    };
  });
};
getJSON();

export const relativeTime = function (date) {
  const start = moment(`${date}`);
  const relative = moment(start, "YYYYMMDD").fromNow();
  console.log(relative);

  state.comments.forEach((comment) => {
    comment.createdAt = relative;
  });
};
