const parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
  const btn = document.createElement("button");
  btn.innerText = "Save";
  btn.style.width = "80%";
  btn.style.padding = "2px";
  btn.style.margin = "20px";
  element.appendChild(btn);
}
