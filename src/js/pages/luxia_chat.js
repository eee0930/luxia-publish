const luxiaChatTabBtns = document.querySelectorAll(
  '.luxia-chat-container__cover-tab-btn'
);
const luxiaChatTabContents = document.querySelectorAll(
  '.luxia-chat-container__cover-contents-list'
);

if (luxiaChatTabBtns && luxiaChatTabBtns.length > 0) {
  const handleClickLuxiaChatTabBtn = (ele) => {
    const targetId = ele.dataset.targetContent;
    const target = document.querySelector(targetId);
    luxiaChatTabBtns.forEach((btn, i) => {
      btn.classList.remove('active');
      luxiaChatTabContents[i].classList.remove('active');
    });
    ele.classList.add('active');
    target.classList.add('active');
  };
  luxiaChatTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => handleClickLuxiaChatTabBtn(btn));
  });
}

const luxiaChatTabSwiperList = [];
if (luxiaChatTabContents && luxiaChatTabContents.length > 0) {
  luxiaChatTabContents.forEach((content) => {
    const luxiaChatTabContainer = content.querySelector(
      '.luxia-chat-container__cover-swiper'
    );
    const buttons = content.querySelectorAll(
      '.luxia-chat-container__cover-arrow button'
    );
    const isPerViewOne = content.querySelectorAll(
      '.luxia-chat-container__cover-ul-question'
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
const luxiaChatJumbotron = document.querySelector('.luxia-jumbotron-container');
const introSection = document.querySelector('#luxiaChatIntro');
const answerSection = document.querySelector('#luxiaChatAnswer');
const chatTextArea = document.querySelector(
  '.luxia-chat-container__chat textarea'
);
const sendChatBtn = document.querySelector('.luxia-chat-container__chat-btn');
if (chatTextArea && sendChatBtn) {
  const handleClickChatSendBtn = (target) => {
    const value = target.value.trim();
    if (value === '' || value.length === 0) return;
    const isActiveAnswerSection = answerSection.classList.contains('active');
    if (!isActiveAnswerSection) {
      luxiaChatJumbotron.classList.add('displayNone');
      introSection.classList.remove('active');
      answerSection.classList.add('active');
      buildAnswerReferenceSwiper();
    }
    target.value = '';
    const parentDiv = target.closest('.textarea-solid');
    if (parentDiv) {
      parentDiv.classList.remove('focus');
    }
  };
  sendChatBtn.addEventListener('click', () =>
    handleClickChatSendBtn(chatTextArea)
  );
}

const buildAnswerReferenceSwiper = () => {
  const answerReferenceListCover = document.querySelector(
    '.luxia-answer-container__reference-list'
  );
  const answerReferenceList =
    answerReferenceListCover?.querySelectorAll('.swiper-slide');
  let luxiaAnswerReferenceSwiper;
  if (answerReferenceList && answerReferenceList.length > 0) {
    if (luxiaAnswerReferenceSwiper) {
      luxiaAnswerReferenceSwiper.destroy();
      luxiaAnswerReferenceSwiper = undefined;
    }
    const options = {
      loop: false,
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 16,
    };
    luxiaAnswerReferenceSwiper = new Swiper(answerReferenceListCover, options);
  }
};
