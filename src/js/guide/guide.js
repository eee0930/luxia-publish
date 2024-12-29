const createElement = (ele, text, classList) => {
  const element = document.createElement(ele);
  element.innerText = text;
  element.classList.add(...classList);
  return element;
};

const componentDiv = createElement("a", "Components Guide", [
  "ia-label",
  "ia-primary",
]);
componentDiv.href = "components/guide.html";
componentDiv.style.top = "184px";
componentDiv.style.left = "100px";

const infoArchitecArea = document.querySelector(
  ".luxia-information-architecture__cover"
);
// infoArchitecArea.append(componentDiv);
