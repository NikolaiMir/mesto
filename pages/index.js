let editBtn = document.querySelector(".profile__button");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__btn-close");
let name = document.querySelector(".profile__name");
let about = document.querySelector(".profile__about");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let formElement = document.querySelector(".popup__container");

function openModel() {
  popup.classList.add("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
}

function closeModel() {
  popup.classList.remove("popup_opened");
}

editBtn.addEventListener("click", openModel);

closeBtn.addEventListener("click", closeModel);
