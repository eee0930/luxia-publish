const luxiaChatTabContents = document.querySelectorAll(
  ".luxia-chat-container .content-tab-box__contents"
);

const luxiaChatTabSwiperList = [];
if (luxiaChatTabContents && luxiaChatTabContents.length > 0) {
  luxiaChatTabContents.forEach((content) => {
    const luxiaChatTabContainer = content.querySelector(
      ".luxia-chat-container__cover-swiper"
    );
    const buttons = content.querySelectorAll(
      ".luxia-chat-container__cover-arrow button"
    );
    const isPerViewOne = content.querySelectorAll(
      ".luxia-chat-container__cover-ul-question"
    );
    let luxiaChatTabSwiper;
    if (!luxiaChatTabSwiper) {
      const options = {
        loop: false,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        navigation: {
          prevEl: buttons[0],
          nextEl: buttons[1],
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },
          810: {
            slidesPerView: isPerViewOne.length > 0 ? 1 : 2,
            spaceBetween: 24,
            centeredSlides: false,
          },
        },
      };
      luxiaChatTabSwiper = new Swiper(luxiaChatTabContainer, options);
      luxiaChatTabSwiperList.push(luxiaChatTabSwiper);
    }
  });
}

// after chat input
const luxiaChatJumbotron = document.querySelector(".luxia-jumbotron-container");
const introSection = document.querySelector("#luxiaChatIntro");
const answerSection = document.querySelector("#luxiaChatAnswer");
const chatTextArea = document.querySelector(
  ".luxia-chat-container__chat textarea"
);
const sendChatBtn = document.querySelector(".luxia-chat-container__chat-btn");
const moveToAnswerSection = () => {
  const isActiveAnswerSection = answerSection.classList.contains("active");
  if (!isActiveAnswerSection) {
    luxiaChatJumbotron.classList.add("displayNone");
    introSection.classList.remove("active");
    answerSection.classList.add("active");
    buildAnswerReferenceSwiper();
  }
};
if (chatTextArea && sendChatBtn) {
  const handleClickChatSendBtn = (target) => {
    const value = target.value.trim();
    if (value === "" || value.length === 0) return;
    moveToAnswerSection();
    target.value = "";
    const parentDiv = target.closest(".textarea-solid");
    if (parentDiv) {
      parentDiv.classList.remove("focus");
    }
  };
  sendChatBtn.addEventListener("click", () =>
    handleClickChatSendBtn(chatTextArea)
  );
}
const moveToNewChatBtn = document.querySelector("#moveToNewChat");
if (moveToNewChatBtn) {
  moveToNewChatBtn.addEventListener("click", () => {
    answerSection.classList.remove("active");
    luxiaChatJumbotron.classList.remove("displayNone");
    introSection.classList.add("active");
  });
}

const buildAnswerReferenceSwiper = () => {
  const answerReferenceListCover = document.querySelector(
    ".luxia-answer-container__reference-list"
  );
  const answerReferenceList =
    answerReferenceListCover?.querySelectorAll(".swiper-slide");
  let luxiaAnswerReferenceSwiper;
  if (answerReferenceList && answerReferenceList.length > 0) {
    if (luxiaAnswerReferenceSwiper) {
      luxiaAnswerReferenceSwiper.destroy();
      luxiaAnswerReferenceSwiper = undefined;
    }
    const options = {
      loop: false,
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 16,
    };
    luxiaAnswerReferenceSwiper = new Swiper(answerReferenceListCover, options);
  }
};

// side popup
const luxiaAnswerSummaryBtns = document.querySelectorAll(
  ".luxia-anwser-container__summary-btn"
);
if (luxiaAnswerSummaryBtns && luxiaAnswerSummaryBtns.length > 0) {
  luxiaAnswerSummaryBtns.forEach((btn) => {
    const parentDiv = btn.closest(".luxia-anwser-container__cards-set");
    const target = parentDiv.querySelector(
      ".luxia-anwser-container__summary-cover"
    );
    if (target) {
      btn.addEventListener("click", () => {
        const isShow = target.classList.contains("show");
        if (isShow) {
          target.style.height = "";
          target.classList.remove("show");
        } else {
          target.classList.add("show");
          setTimeout(() => {
            target.style.height = "auto";
          }, 10);
        }
      });
    }
  });
}

// TODO : remove
const answerTargets = document.querySelectorAll(
  ".luxia-chat-container__cover-list-wrapper"
);
if (answerTargets) {
  answerTargets.forEach((targetCover) => {
    const lis = targetCover.querySelectorAll("li");
    lis.forEach((li) => {
      li.addEventListener("click", moveToAnswerSection);
    });
  });
}
