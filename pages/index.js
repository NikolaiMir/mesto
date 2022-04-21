let editBtn = document.querySelector(".profile__button");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__btn-close");
let name = document.querySelector(".profile__name").textContent;
let about = document.querySelector(".profile__about").textContent;
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");

function openModel() {
  popup.classList.add("popup_opened");
  nameInput.value = name;
  jobInput.value = about;
}

function closeModel() {
  popup.classList.remove("popup_opened");
}

editBtn.addEventListener("click", openModel);

closeBtn.addEventListener("click", closeModel);
