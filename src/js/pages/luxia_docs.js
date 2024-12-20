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
