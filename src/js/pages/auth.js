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

// [code input]----------------------------------------------------------------
const codeInputs = document.querySelectorAll(
  ".luxia-auth-container__form .code"
);
if (codeInputs && codeInputs.length > 0) {
  codeInputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault(); // Prevent entering multiple characters
        input.value = e.key;
        if (index < codeInputs.length - 1) {
          codeInputs[index + 1].focus();
        }
      } else if (e.key === "Backspace") {
        e.preventDefault();
        input.value = "";
        if (index > 0 && input.value === "") {
          codeInputs[index - 1].focus();
        }
      }
    });

    input.addEventListener("focus", () => {
      input.select();
    });
  });
}
