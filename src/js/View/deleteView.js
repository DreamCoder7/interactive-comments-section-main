import View from "./View.js";

class DeleteView extends View {
  _parentElement = document.querySelector(".comments__list");

  _overlayEl = document.querySelector(".overlay");
  _popupEl = document.querySelector(".popup");
  _btnsContainer = document.querySelector(".comment__delete--btns");
  _cancelBtn = document.querySelector(".cancel");
  _deleteBtn = document.querySelector(".delete");

  togglePopup() {
    this._overlayEl.classList.toggle("hidden");
    this._popupEl.classList.toggle("hidden");
  }

  addHundlerCancelDelete(hundler) {
    this._btnsContainer.addEventListener("click", function (e) {
      if (e.target.closest(".cancel")) {
        hundler();
      } else if (e.target.closest(".delete")) {
        const parentEl = document.querySelector(".deleted");
        parentEl.remove();
        hundler();
      }
    });
  }

  addHundlerDeleteReplied(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__delete");
      if (!btn) return;

      const parentEl = btn.closest(".commnet__replied");
      parentEl.className = "comments__list--item commnet__replied deleted";
      hundler();
    });
  }
}

export default new DeleteView();
