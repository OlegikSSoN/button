const wrapperBlock = document.getElementsByClassName("parent-block");

for (const element of wrapperBlock) {
  let btn = document.createElement("button");
  btn.innerText = "Save";
  btn.style.width = "80%";
  btn.style.padding = "2px";
  btn.style.margin = "20px";
  element.appendChild(btn);
}
