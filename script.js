const wrapperBlock = document.getElementsByClassName("parent-block");

for (const button of wrapperBlock) {
  let btn = document.createElement("button");
  btn.style.width = "80%";
  btn.style.padding = "2px";
  btn.style.margin = "20px";
  btn.textContent = "Save";
  button.appendChild(btn);
}
