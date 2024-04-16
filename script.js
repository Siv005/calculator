const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector(".btn");
let data = document.querySelectorAll(".input-box");

function showData() {
  notesContainer.innerHTML = localStorage.getItem("data");
}
showData();

function updateStorage() {
  localStorage.setItem("data", notesContainer.innerHTML);
}
updateStorage();
addBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "img/trash-sharp.svg";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    data = document.querySelectorAll(".input-box");
    data.forEach((dt) => {
      dt.onKeyUp = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keyDown", (event) => {
  if (event.key === "enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
