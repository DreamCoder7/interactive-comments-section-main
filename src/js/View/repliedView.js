import View from "./View.js";
import iconPlus from "url:../../images/icons/icon-plus.svg";
import iconMinus from "url:../../images/icons/icon-minus.svg";
import iconEdit from "url:../../images/icons/icon-edit.svg";
import iconReply from "url:../../images/icons/icon-reply.svg";
import iconDelete from "url:../../images/icons/icon-delete.svg";
import image2 from "../../images/avatars/image-ramsesmiron.webp";

class ReplyView extends View {
  _parentElement = document.querySelector(".comments__list");

  addHundlerReplied(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const commentBtn = e.target.closest(".comment__reply--btn");
      if (!commentBtn) return;
      const inputValue = commentBtn
        .closest(".comment__reply")
        .querySelector(".comment__reply--input");

      const parentEl = commentBtn.closest(".comments__list--cont");

      commentBtn.closest(".comment__reply").classList.add("hidden");
      hundler(inputValue, parentEl);
      inputValue.value = "";
    });
  }

  repliedMarkup(data) {
    return `
        <li class="comments__list--item commnet__replied">
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
                        src="${image2}"
                        alt="Women images"
                        class="user__img"
                        />
                        <p class="user__name">${
                          data.userName ? data.userName : data.user.username
                        }</p>
                        ${data.id === 3 ? "" : `<span class="owner">you</span>`}
                        <p class="user__period">${data.createdAt}</p>
                    </div>
                    <div class="btns">${
                      data.id === 3
                        ? `<button class="item__btn">
                        <img
                            src="${iconReply}"
                            alt="Reply icon"
                            class="item__btn-icon"
                        />
                        Reply
                        </button>`
                        : ` <button class=" btn__delete">
                    <img
                        src="${iconDelete}"
                        alt="Edit icon"
                        class="item__btn-icon"
                    />
                    Delete
                    </button>
                    <button class=" btn__edit">
                    <img
                        src="${iconEdit}"
                        alt="Edit icon"
                        class="item__btn-icon"
                    />
                    Edit
                    </button>`
                    }</div>
                </div>
                <p class="user__comment--text">
                    <span class="replying__to">${
                      data.replyingTo.startsWith("@") ? "" : "@"
                    } ${data.replyingTo}</span>
                    ${data.content}
                </p>
        </li>
      `;
  }
}

export default new ReplyView();
