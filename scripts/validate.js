// Функция, которая добавляет класс с ошибкой

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

// Функция, которая удаляет класс с ошибкой

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  // Скрываем сообщение об ошибке
  errorElement.classList.remove(errorClass);
  // // Очистим ошибку
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const validateInput = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  if (!inputElement.validity.valid) {
    // showInputError получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    // hideInputError получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

// проверяем наличие невалидного поля

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  });
};

// функция отключения и включения кнопки

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "disabled");
  }
};

// Добавляем обработчики событий всем полям формы

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener("input", () => {
      // Внутри колбэка вызовем validateInput,
      // передав ей форму и проверяемый элемент
      validateInput(formElement, inputElement, inputErrorClass, errorClass);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

// Добавляем обработчики всем формам

const enableValidation = ({
  inputSelector,
  submitButtonSelector,
  formSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
};

// Вызовем функцию

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__name",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__name-error-active",
});
