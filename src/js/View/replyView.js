import View from "./View.js";

class ReplyView extends View {
  _parentElement = document.querySelector(".comments__list");

  addHundlerReply(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const target = e.target.closest(".item__btn");
      console.log(target);
      const parent = target
        .closest(".comments__list--item")
        .querySelector(".user__name").textContent;
      hundler(parent);
    });
  }

  _generateMarkup() {
    return `
        <li class="comments__list--item comment__reply">
            <img
                src="${this._data.userImage.png}"
                alt="women image"
                class="comment__reply--img"
            />
            <input type="text" class="comment__reply--input" />
            <button class="comment__reply--btn">reply</button>
        </li>
    `;
  }
}

export default new ReplyView();
