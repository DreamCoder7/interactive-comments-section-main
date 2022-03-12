import View from "./View.js";

class DeleteView extends View {
  _parentElement = document.querySelector(".commnet__replied");

  _overlayEl = document.querySelector(".overlay");
  _popupEl = document.querySelector(".popup");

  constructor() {
    super();
    this.addHundlerDeleteReplied();
  }

  addHundlerDeleteReplied() {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__delete");
      if (!btn) return;
      console.log(btn);
    });
  }
}

export default new DeleteView();
