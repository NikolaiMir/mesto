// Шаблоны

const inputList = Array.from(document.querySelectorAll(".popup__name"));
const buttonElement = document.querySelector(".popup__btn");
const namePlace = inputPlace.value;
const linkPlace = inputLink.value;
const cardTemplate = document
  .querySelector("#card")
  .content.querySelector(".gallery__item");

// Обработчик событий удаление карточки

const handleDeleteCard = (e) => {
  e.target.closest(".gallery__item").remove();
};

// Обработчик событий лайк карточки

const handleLikeCard = (e) => {
  e.target.classList.toggle("gallery__like_active");
};

// Обработчик событий открытие попапа на картинку

const openModelImg = (link, alt) => {
  const img = document.querySelector(".popup__img-main");
  const title = document.querySelector(".popup__img-title");
  img.src = link;
  img.alt = alt;
  title.textContent = alt;
  openPopup(popupImg);
};

// Генерация карточек

const genereteCard = (cardData) => {
  const newCard = cardTemplate.cloneNode(true);
  const titleCard = newCard.querySelector(".gallery__title");
  const imageCard = newCard.querySelector(".gallery__img");
  const galleryImg = newCard.querySelector(".gallery__img");
  const deleteCard = newCard.querySelector(".gallery__trash");
  const cardLike = newCard.querySelector(".gallery__like");

  titleCard.textContent = cardData.name;
  imageCard.src = cardData.link;
  imageCard.alt = cardData.name;
  const link = galleryImg.src;
  const alt = galleryImg.alt;

  deleteCard.addEventListener("click", handleDeleteCard);

  cardLike.addEventListener("click", handleLikeCard);

  galleryImg.addEventListener("click", () => {
    openModelImg(link, alt);
  });

  return newCard;
};

// добавление карточки

const addCard = (cardData) => {
  cardConteiner.prepend(genereteCard(cardData));
};

// отрисовка карточек принимает объект

initialCards.forEach(addCard);

// Обработчики событий

// закрытие попапа на клавишу esc

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const closePopup = (popup) => {
  popup.removeEventListener("keydown", closePopupEsc);
  popup.classList.remove("popup_opened");
};

const openPopupProfile = () => {
  openPopup(popupProfile);
  nameInput.value = name.textContent;
  jobInput.value = about.textContent;
};

const closePopupProfile = () => {
  closePopup(popupProfile);
};

const openModelAdd = () => {
  const btnSubmitPlace = document.querySelector("#btn-submit-place");
  btnSubmitPlace.classList.add("popup__btn_disabled");
  btnSubmitPlace.setAttribute("disabled", "disabled");
  // btnSubmitPlace.removeAttribute("disabled", "disabled");
  openPopup(popupAdd);
};

const closeModelAdd = () => {
  closePopup(popupAdd);
  inputPlace.value = "";
  inputLink.value = "";
};

const closeModelImage = () => {
  closePopup(popupImg);
};

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  const nameProfile = nameInput.value;
  const jobProfile = jobInput.value;
  name.textContent = nameProfile;
  about.textContent = jobProfile;
  closePopupProfile();
}

// Функция добавления новой карточки

const formPlaceSubmitHandler = (evt) => {
  evt.preventDefault();
  const nameImg = document.querySelector("#place").value;
  const linkImg = document.querySelector("#url").value;

  const cardNewData = {
    name: nameImg,
    link: linkImg,
  };
  addCard(cardNewData);
  closeModelAdd();
};

// Закрытие попапов кликом на оверлей

const popupOverleyClose = () => {
  popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      }
    });
  });
};

popupOverleyClose();

// Слушатели событий

btnEditProfile.addEventListener("click", openPopupProfile);

btnCloseProfile.addEventListener("click", closePopupProfile);

formProfile.addEventListener("submit", formSubmitHandlerProfile);

btnAddCard.addEventListener("click", openModelAdd);

btnClosePopupAdd.addEventListener("click", closeModelAdd);

formPlace.addEventListener("submit", formPlaceSubmitHandler);

btnCloseImage.addEventListener("click", closeModelImage);

document.addEventListener("keydown", closePopupEsc);
