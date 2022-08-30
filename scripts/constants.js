const btnEditProfile = document.querySelector(".profile__button");
const popupProfile = document.querySelector("#popup_profile");
const popupAdd = document.querySelector("#popup-place__form");
const btnCloseProfile = document.querySelector(".popup__btn-close");
const name = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const formProfile = document.querySelector("#pop-form-edit");
const cardConteiner = document.querySelector(".card-Template__list");
const btnAddCard = document.querySelector(".profile__add");
const btnClosePopupAdd = document.querySelector("#closePlaceform");
const formPlace = document.querySelector("#popup-place__form_Add");
const inputPlace = document.querySelector("#place");
const inputLink = document.querySelector("#url");
const popupImg = document.querySelector("#popupImgForm");
const btnCloseImage = document.querySelector("#popup-img__close");

// Массив карточек initialCards
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
