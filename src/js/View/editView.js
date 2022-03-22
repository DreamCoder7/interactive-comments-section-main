import View from "./View.js";

class EditView extends View {
  _parentElement = document.querySelector(".container");

  addHundlerUpdate(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".update--btn");
      if (!btn) return;

      const target = btn.closest(".user__comment");
      const repliedText = target.querySelector(".update--input");
      console.log(repliedText);
      hundler(target, repliedText);
      repliedText.remove();
      btn.remove();
    });
  }

  addHundlerEditReplied(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn__edit");
      if (!btn) return;

      const target = btn.closest(".user__comment");
      const repliedText = target.querySelector(".user__comment--text");
      console.log(repliedText);
      hundler(target, repliedText);
      repliedText.remove();
    });
  }

  editMarkup() {
    return `
        <input type="text" class="comment__reply--input update--input" value= ""/>
        <button class="update--btn">Update</button>
    `;
  }

  updateMarkup(data) {
    return `
        <p class="user__comment--text">${data}</p>
    `;
  }
}

export default new EditView();
