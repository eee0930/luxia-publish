const luxiaJoinAgree = document.querySelector("#luxiaJoinAgree");
const luxiaJoinAddInfo = document.querySelector("#luxiaJoinAddInfo");

const luxiaJoinAgreeBtn = document.querySelector("#luxiaJoinAgreeBtn");
const cancelJoinAddInfoBtn = document.querySelector("#cancelJoinAddInfo");

if (luxiaJoinAgreeBtn) {
  luxiaJoinAgreeBtn.addEventListener("click", () => {
    luxiaJoinAgree.classList.remove("active");
    luxiaJoinAddInfo.classList.add("active");
  });
}
if (cancelJoinAddInfoBtn) {
  cancelJoinAddInfoBtn.addEventListener("click", () => {
    luxiaJoinAgree.classList.add("active");
    luxiaJoinAddInfo.classList.remove("active");
  });
}

const joinMemberBtn = document.querySelector("#joinMemberBtn");
if (joinMemberBtn) {
  joinMemberBtn.addEventListener("click", () => {});
}
