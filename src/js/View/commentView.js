import View from "./View.js";
import iconPlus from "url:../../images/icons/icon-plus.svg";
import iconMinus from "url:../../images/icons/icon-minus.svg";
import iconReply from "url:../../images/icons/icon-reply.svg";
import image1 from "../../images/avatars/image-amyrobson.webp";
import image2 from "../../images/avatars/image-juliusomo.webp";


class CommentView extends View {
  _parentElement = document.querySelector(".comments__list");

  addHundlerUpVote() {
    this._parentElement.addEventListener("click", function (e) {
      const upVote = e.target.closest(".item__vote--icon");
      if (!upVote) return;

      const voted = upVote
        .closest(".item__vote")
        .querySelector(".item__vote--num");
      console.log(voted);

      if (upVote.closest(".item__up--vote")) {
        +voted.textContent++;
      } else if (upVote.closest(".item__down--vote")) {
        +voted.textContent--;
      }
    });
  }

  _generateMarkup() {
    return this._data
      .map((data, index) => {
        return `
        <div class="comments__list--cont">
            <li class="comments__list--item comment__item--${index + 1}">
                <div class="item__vote">
                    <button class="item__up--vote">
                        <img
                        src="${iconPlus}"
                        alt="plus icon"
                        class="item__vote--icon"
                        />
                    </button>
                    <p class="item__vote--num">${data.score}</p>
                    <button class="item__down--vote">
                        <img
                        src="${iconMinus}"
                        alt="minus icon"
                        class="item__vote--icon"
                        />
                    </button>
                </div>
                <figure class="user__comment">
                <div class="user__comment-head">
                    <div class="user__comment--info">
                    <img
                        src="${image1}"
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
                <p class="user__comment--text">
                    ${data.content}
                </p>
                </figure>
            </li>

            <li class="comment__reply hidden">
                <img
                    src="${image2}"
                    alt="women image"
                    class="comment__reply--img"
                />
                <input type="text" class="comment__reply--input" placeholder="Add a comment..."/>
                <button class="comment__reply--btn">reply</button>
            </li>
        </div>
    `;
      })
      .join("");
  }
}

export default new CommentView();
