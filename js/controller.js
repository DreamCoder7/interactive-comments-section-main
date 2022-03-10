const container = document.querySelector(".comments__list");

const state = {
  comment: [],
};

const getJSON = async function () {
  try {
    const res = await fetch(`./data.json`);

    const data = await res.json();
    console.log(data);

    const html = `
        <li class="comments__list--item">
            <div class="item__input">
                <img
                src="images/icon-plus.svg"
                alt="plus icon"
                class="item__input--icon"
                />
                <p class="item__input--num">${data.comments[0].score}</p>
                <img
                src="images/icon-minus.svg"
                alt="minus icon"
                class="item__input--icon"
                />
            </div>
            <figure class="user__comment">
                <div class="user__comment-head">
                <div class="user__comment--info">
                    <img
                    src="${data.comments[0].user.image.png}"
                    alt="Women images"
                    class="user__img"
                    />
                    <p class="user__name">${data.comments[0].user.username}</p>
                    <p class="user__period">${data.comments[0].createdAt}</p>
                </div>
                <button class="item__btn">
                    <img
                    src="images/icon-reply.svg"
                    alt="Reply icon"
                    class="item__btn-icon"
                    />
                    Reply
                </button>
                </div>
                <blockquote class="user__comment--text">
                    ${data.comments[0].content}
                </blockquote>
            </figure>
        </li>
    `;

    // container.insertAdjacentHTML("beforebegin", html);
  } catch (err) {
    console.error(err);
  }
};
getJSON();
