const luxiaDocsTabBtns = document.querySelectorAll(
  ".luxia-docs-container__cover-tab-btn"
);
const luxiaDocsTabContents = document.querySelectorAll(
  ".luxia-docs-container__tab-contents"
);

const handleClickLuxiaChatTabBtn = (ele) => {
  const targetId = ele.dataset.targetContent;
  const target = document.querySelector(targetId);
  luxiaDocsTabBtns.forEach((btn, i) => {
    btn.classList.remove("active");
    luxiaDocsTabContents[i].classList.remove("active");
  });
  ele.classList.add("active");
  target.classList.add("active");
};
if (luxiaDocsTabBtns && luxiaDocsTabBtns.length > 0) {
  luxiaDocsTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => handleClickLuxiaChatTabBtn(btn));
  });
}

// after chat input
const luxiaDocsJumbotron = document.querySelector(".luxia-jumbotron-container");
const introSection = document.querySelector("#luxiaDocsIntro");
const reusltSection = document.querySelector("#luxiaDocsResult");
const luxiaDocsBottomBtn = document.querySelector("#luxiaDocsBottomBtn");
const luxiaDocsBottomChat = document.querySelector("#luxiaDocsBottomChat");

const getResultDocsBtn = document.querySelector(
  ".luxia-docs-container__summary-btn"
);
const moveToAnswerSection = () => {
  const isActiveResultSection = reusltSection.classList.contains("active");
  if (!isActiveResultSection) {
    luxiaDocsJumbotron.classList.add("displayNone");
    introSection.classList.remove("active");
    luxiaDocsBottomBtn.classList.remove("active");
    reusltSection.classList.add("active");
    luxiaDocsBottomChat.classList.add("active");
  }
};
if (getResultDocsBtn) {
  getResultDocsBtn.addEventListener("click", moveToAnswerSection);
}
