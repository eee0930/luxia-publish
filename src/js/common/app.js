// layout controls
const luxiaLayoutContainer = document.querySelector('.luxia-layout-container');
const luxiaLayoutContainerMenu = document.querySelector(
  '.luxia-layout-container__menu'
);
// menu controls
const menuToggleBtnMobile = document.querySelector(
  '.luxia-menu-container__button'
);
const menuContainerDimm = document.querySelector('.luxia-menu-container__dimm');
const menuToggleBtnPc = document.querySelector(
  '.luxia-menu-container__button-pc'
);
const menuToggleBtnOnGnb = document.querySelector(
  '.luxia-gnb-container__button'
);
const MENU_ACTIVE = 'menu-active';
const MENU_HIDE = 'menu-hide';
const MENU_ACTIVE_PC = 'menu-active-pc';
const BREAK_POINT = 1200;
let menuToggleTimeout;

const handleToggleMenu = () => {
  const isMenuActive = luxiaLayoutContainer.classList.contains(MENU_ACTIVE);
  if (isMenuActive) {
    luxiaLayoutContainer.classList.remove(MENU_ACTIVE);
    if (menuToggleTimeout) {
      clearTimeout(menuToggleTimeout);
    }
    menuToggleTimeout = setTimeout(() => {
      luxiaLayoutContainerMenu.style.display = 'none';
      clearTimeout(menuToggleTimeout);
    }, 300);
  } else {
    luxiaLayoutContainerMenu.style.display = '';
    if (menuToggleTimeout) {
      clearTimeout(menuToggleTimeout);
    }
    menuToggleTimeout = setTimeout(() => {
      luxiaLayoutContainer.classList.add(MENU_ACTIVE);
      clearTimeout(menuToggleTimeout);
    }, 10);
  }
};
const setLocalMenuActiveData = (isActive) => {
  let luxiaAskContext = localStorage.getItem('luxiaAskContext');
  let luxiaAskContextData;
  if (luxiaAskContext) {
    luxiaAskContextData = JSON.parse(luxiaAskContext);
    luxiaAskContextData.menuActive = isActive;
  } else {
    luxiaAskContextData = { menuActive: isActive };
  }
  luxiaAskContext = JSON.stringify(luxiaAskContextData);
  localStorage.setItem('luxiaAskContext', luxiaAskContext);
};
const handleToggleMenuForPc = () => {
  const isMenuActive = luxiaLayoutContainer.classList.contains(MENU_ACTIVE_PC);
  if (isMenuActive) {
    setLocalMenuActiveData(false);
    luxiaLayoutContainer.classList.remove(MENU_ACTIVE_PC);
    luxiaLayoutContainer.classList.add(MENU_HIDE);
  } else {
    setLocalMenuActiveData(true);
    luxiaLayoutContainer.classList.add(MENU_ACTIVE_PC);
    if (menuToggleTimeout) {
      clearTimeout(menuToggleTimeout);
    }
    menuToggleTimeout = setTimeout(() => {
      luxiaLayoutContainer.classList.remove(MENU_HIDE);
      clearTimeout(menuToggleTimeout);
    }, 300);
  }
};

menuToggleBtnMobile.addEventListener('click', handleToggleMenu);
menuContainerDimm.addEventListener('click', handleToggleMenu);
menuToggleBtnOnGnb.addEventListener('click', handleToggleMenu);
menuToggleBtnPc.addEventListener('click', handleToggleMenuForPc);

const getLocalMenuActiveInfo = () => {
  const width = window.innerWidth;
  const luxiaAskContext = localStorage.getItem('luxiaAskContext');
  if (width > BREAK_POINT && luxiaAskContext) {
    const { menuActive } = JSON.parse(luxiaAskContext);
    if (menuActive) {
      luxiaLayoutContainer.classList.add(MENU_ACTIVE_PC);
    }
  }
};
const addClassMenuForPc = () => {
  const width = window.innerWidth;
  const isMenuActive = luxiaLayoutContainer.classList.contains(MENU_ACTIVE);
  const isMenuActivePc =
    luxiaLayoutContainer.classList.contains(MENU_ACTIVE_PC);
  const isMenuHide = luxiaLayoutContainer.classList.contains(MENU_HIDE);
  if (width > BREAK_POINT && !isMenuActivePc && !isMenuHide) {
    luxiaLayoutContainer.classList.add(MENU_HIDE);
  } else if (width < BREAK_POINT && !isMenuActive) {
    luxiaLayoutContainerMenu.style.display = 'none';
  }
};
window.addEventListener('DOMContentLoaded', () => {
  getLocalMenuActiveInfo();
  addClassMenuForPc();
});
window.addEventListener('resize', () => {
  getLocalMenuActiveInfo();
  addClassMenuForPc();
});

// handle textarea
const solidTexareaList = document.querySelectorAll('.textarea-solid');
if (solidTexareaList && solidTexareaList.length > 0) {
  const autoResizeTextarea = (ele) => {
    ele.style.height = '26px'; // Reset height to calculate the new height
    ele.style.height = Math.min(ele.scrollHeight, 144) + 'px';
  };
  solidTexareaList.forEach((textareaCover) => {
    textareaCover.addEventListener('click', () => {
      textareaCover.classList.add('focus');
    });
    document.addEventListener('click', (event) => {
      if (!textareaCover.contains(event.target)) {
        textareaCover.classList.remove('focus');
      }
    });
    const textarea = textareaCover.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('input', () => autoResizeTextarea(textarea));
    }
  });
}