import View from "./View.js";

class ReplyView extends View {
  _parentElement = document.querySelector(".container");

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
}

export default new ReplyView();
