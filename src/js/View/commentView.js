import View from "./View.js";
import iconPlus from "url:../../images/icons/icon-plus.svg";
import iconMinus from "url:../../images/icons/icon-minus.svg";
import iconReply from "url:../../images/icons/icon-reply.svg";
// import avatars from "../../images/avatars";
// console.log(avatars);

console.log(iconPlus);

class CommentView extends View {
  _parentElement = document.querySelector(".comments__list");

  _generateMarkup() {
    return this._data.map((data) => {
      return `
        <li class="comments__list--item">
            <div class="item__input">
            <img
                src="${iconPlus}"
                alt="plus icon"
                class="item__input--icon"
            />
            <p class="item__input--num">${data.score}</p>
            <img
                src="${iconMinus}"
                alt="minus icon"
                class="item__input--icon"
            />
            </div>
            <figure class="user__comment">
            <div class="user__comment-head">
                <div class="user__comment--info">
                <img
                    src="${data.userImage.png}"
                    alt="Women images"
                    class="user__img"
                />
                <p class="user__name">${data.userName}</p>
                <p class="user__period">${data.createdAt}</p>
                </div>
                <button class="item__btn">
                <img
                    src="${iconReply}"
                    alt="Reply icon"
                    class="item__btn-icon"
                />
                Reply
                </button>
            </div>
            <blockquote class="user__comment--text">
                ${data.content}
            </blockquote>
            </figure>
        </li>
    `;
    });
  }
}

export default new CommentView();
