import data from "../json/data.json";

export const state = {
  comments: [],
  currentUser: [],
};

export const getJSON = function () {
  //   state.comments.push(data.comments[0]);

  state.comments = data.comments.map((comment) => {
    //   console.log(comment);
    return {
      content: comment.content,
      createdAt: comment.createdAt,
      id: comment.id,
      replies: comment.replies,
      score: comment.score,
      userImage: comment.user.image,
      userName: comment.user.username,
    };
  });
};
getJSON();
