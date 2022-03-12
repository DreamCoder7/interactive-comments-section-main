import View from "./View.js";
import iconPlus from "url:../../images/icons/icon-plus.svg";
import iconMinus from "url:../../images/icons/icon-minus.svg";
import iconEdit from "url:../../images/icons/icon-edit.svg";
import iconDelete from "url:../../images/icons/icon-delete.svg";
import image1 from "../../images/avatars/image-maxblagun.webp";
import image2 from "../../images/avatars/image-ramsesmiron.webp";

class ReplyView extends View {
  _parentElement = document.querySelector(".comments__list");

  addHundlerReplied() {
    this._parentElement.addEventListener("click", function (e) {
      const commentBtn = e.target.closest(".comment__reply--btn");
      if (!commentBtn) return;
      a;
      const parentText = commentBtn
        .closest(".comments__list--cont")
        .querySelector(".user__comment--text");

      const inputValue = commentBtn
        .closest(".comment__reply")
        .querySelector(".comment__reply--input");

      parentText.textContent = inputValue.value;
      commentBtn.closest(".comment__reply").classList.add("hidden");
    });
  }

  addHundlerReply(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target.closest(".item__btn");
      if (!target) return;
      const parentEl = target
        .closest(".comments__list--item")
        .querySelector(".user__name");
      hundler(parentEl);
    });
  }

  _generateMarkup() {
    return this._data.map((data) => {
      return `
        <li class="comments__list--item commnet__replied">
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
                    src="${image1}"
                    alt="Women images"
                    class="user__img"
                    />
                    <p class="user__name">${data.user.username}</p>
                    <span class="owner">you</span>
                    <p class="user__period">${data.createdAt}</p>
                </div>
                <div class="btns">
                    <button class="item__btn btn__delete">
                    <img
                        src="${iconDelete}"
                        alt="Edit icon"
                        class="item__btn-icon"
                    />
                    Delete
                    </button>
                    <button class="item__btn btn__edit">
                    <img
                        src="${iconEdit}"
                        alt="Edit icon"
                        class="item__btn-icon"
                    />
                    Edit
                    </button>
                </div>
                </div>
                <blockquote class="user__comment--text">
                    ${data.content}
                </blockquote>
        </li>
      `;
    });
  }
}

export default new ReplyView();
