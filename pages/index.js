let editBtn = document.querySelector(".profile__button");
const popupProfile = document.querySelector("#popup_profile");
const popupAdd = document.querySelector("#popup-place__form");
let closeBtn = document.querySelector(".popup__btn-close");
let name = document.querySelector(".profile__name");
let about = document.querySelector(".profile__about");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let formElement = document.querySelector("#pop-form-edit");
const cardConteiner = document.querySelector(".card__list");
const addBtn = document.querySelector(".profile__add");
const closeBtnAdd = document.querySelector("#closePlaceform");
const formPlace = document.querySelector("#popup-place__form_Add");
const inputPlace = document.querySelector("#name-place");
const inputLink = document.querySelector("#link-place");

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

// Шаблоны

const cardTemplate = document
  .querySelector("#cards")
  .content.querySelector(".gallery__item");

// Генерация карточек

const genereteCards = (cardData) => {
  const newCard = cardTemplate.cloneNode(true);
  const titleCard = newCard.querySelector(".gallery__title");
  const imageCard = newCard.querySelector(".gallery__img");

  titleCard.textContent = cardData.name;
  imageCard.src = cardData.link;

  return newCard;
};

// рендер всех карточек

const renderCards = (cardData) => {
  cardConteiner.prepend(genereteCards(cardData));
};

// отрисовка карточек принимает объект

initialCards.forEach((cardData) => {
  renderCards(cardData);
});

// Обработчики событий

function openModel() {
  popupProfile.classList.toggle("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
}

function openModelAdd() {
  popupAdd.classList.toggle("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameProfile = nameInput.value;
  let jobProfile = jobInput.value;
  name.textContent = nameProfile;
  about.textContent = jobProfile;
  openModel();
}

// Функция добавления новой карточки

const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  let namePlace = inputPlace.value;
  let linkPlace = inputLink.value;
  const cardNewData = {
    name: namePlace,
    link: linkPlace,
  };
  renderCards(cardNewData);
  openModelAdd();
};

// Слушатели событий

editBtn.addEventListener("click", openModel);

closeBtn.addEventListener("click", openModel);

formElement.addEventListener("submit", formSubmitHandler);

addBtn.addEventListener("click", openModelAdd);

closeBtnAdd.addEventListener("click", openModelAdd);

formPlace.addEventListener("submit", formPlaceSubmitHandler);
