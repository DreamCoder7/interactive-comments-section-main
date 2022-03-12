import data from "../json/data.json";

export const state = {
  comments: [],
  currentUser: [],
};
console.log(state);

export const getJSON = function () {
  //   state.comments.push(data.comments[0]);

  state.comments = data.comments.map((comment) => {
    //   console.log(comment);
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
