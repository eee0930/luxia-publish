const luxiaGenerateNextBtn = document.querySelector("#luxiaGenerateNextBtn");
const luxiaGeneratePrevBtn = document.querySelector("#luxiaGeneratePrevBtn");
const luxiaGenerateSaveBtn = document.querySelector("#luxiaGenerateSaveBtn");

const luxiaGenerateContents = document.querySelectorAll(
  ".luxia-generate-container__cover"
);
const luxiaGenerateSteps = document.querySelectorAll(
  ".luxia-generate-container__steps .step"
);
let nowGenerateStep = 0;

const displayButtons = () => {
  if (nowGenerateStep > 0) {
    luxiaGeneratePrevBtn.removeAttribute("disabled");
  } else {
    luxiaGeneratePrevBtn.setAttribute("disabled", true);
  }
  if (nowGenerateStep >= luxiaGenerateContents.length - 1) {
    luxiaGenerateSaveBtn.style.display = "";
    luxiaGenerateNextBtn.style.display = "none";
  } else {
    luxiaGenerateSaveBtn.style.display = "none";
    luxiaGenerateNextBtn.style.display = "";
  }
};
if (luxiaGeneratePrevBtn && luxiaGenerateNextBtn && luxiaGenerateContents) {
  luxiaGenerateNextBtn.addEventListener("click", () => {
    if (nowGenerateStep === luxiaGenerateContents.length - 1) return;
    const nowContent = luxiaGenerateContents[nowGenerateStep];
    const nextContent = luxiaGenerateContents[nowGenerateStep + 1];
    nowContent.classList.remove("active");
    nextContent.classList.add("active");
    luxiaGenerateSteps[nowGenerateStep].classList.remove("step-active");
    luxiaGenerateSteps[nowGenerateStep].classList.add("step-past");
    luxiaGenerateSteps[nowGenerateStep + 1].classList.add("step-active");

    nowGenerateStep++;
    displayButtons();
  });

  luxiaGeneratePrevBtn.addEventListener("click", () => {
    if (nowGenerateStep === 0) return;
    const nowContent = luxiaGenerateContents[nowGenerateStep];
    const prevContent = luxiaGenerateContents[nowGenerateStep - 1];
    nowContent.classList.remove("active");
    prevContent.classList.add("active");
    luxiaGenerateSteps[nowGenerateStep].classList.remove("step-active");
    luxiaGenerateSteps[nowGenerateStep - 1].classList.remove("step-past");
    luxiaGenerateSteps[nowGenerateStep - 1].classList.add("step-active");

    nowGenerateStep--;
    displayButtons();
  });
}
