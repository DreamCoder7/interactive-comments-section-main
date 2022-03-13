import View from "./View.js";
import iconPlus from "url:../../images/icons/icon-plus.svg";
import iconMinus from "url:../../images/icons/icon-minus.svg";
import iconReply from "url:../../images/icons/icon-reply.svg";
import image1 from "../../images/avatars/image-maxblagun.webp";
import image2 from "../../images/avatars/image-ramsesmiron.webp";

class SendView extends View {
  _parentElement = document.querySelector(".comments__list");

  addHundlerSend(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target.closest(".comment__send--btn");
      if (!target) return;

      const sendInput = target
        .closest(".comment__send")
        .querySelector(".comment__reply--input");

      const parentEl = target.closest(".comment__send");
      hundler(sendInput, parentEl);
    });
  }

  _generateMarkup() {
    return `
        <li class="comment__send">
            <img
                src="${image2}"
                alt="women image"
                class="comment__reply--img"
            />
            <input type="text" class="comment__reply--input" />
            <button class="comment__send--btn">reply</button>
        </li>
        `;
  }

  generateSendMarkup(data) {
    return `
        <div class="comments__list--cont">
            <li class="comments__list--item">
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
                <blockquote class="user__comment--text">
                    ${data.content}
                </blockquote>
                </figure>
            </li>

            <li class="comment__reply hidden">
                <img
                    src="${image2}"
                    alt="women image"
                    class="comment__reply--img"
                />
                <input type="text" class="comment__reply--input" />
                <button class="comment__reply--btn">reply</button>
            </li>
        </div>
    `;
  }
}

export default new SendView();
