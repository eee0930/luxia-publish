const luxiaGenerateNextBtn = document.querySelector("#luxiaGenerateNextBtn");
const luxiaGeneratePrevBtn = document.querySelector("#luxiaGeneratePrevBtn");
const luxiaGenerateContents = document.querySelectorAll(
  ".luxia-generate-container__cover"
);
const luxiaGenerateSteps = document.querySelectorAll(
  ".luxia-generate-container__steps .step"
);
let nowGenerateStep = 0;

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
    if (nowGenerateStep > 0) {
      luxiaGeneratePrevBtn.removeAttribute("disabled");
    }
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
    if (nowGenerateStep === 0) {
      luxiaGeneratePrevBtn.setAttribute("disabled", true);
    }
  });
}
