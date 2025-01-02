const jsViewGuideBtn = document.querySelectorAll(".jsViewGuide");
let prevTargetId = "#Introduction";
let prevBtn = document.querySelector(".jsViewGuide.active");
jsViewGuideBtn.forEach((btn) => {
  const targetId = btn.dataset.target;
  const target = document.querySelector(targetId);

  btn.addEventListener("click", () => {
    const prevTarget = document.querySelector(prevTargetId);
    prevTarget.classList.remove("active");
    target.classList.add("active");
    prevTargetId = targetId;

    prevBtn.classList.remove("active");
    btn.classList.add("active");
    prevBtn = btn;
  });
});
