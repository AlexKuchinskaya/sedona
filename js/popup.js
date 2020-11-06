const ESCAPE = 27;
const showFormButton = document.querySelector(`.accommodation-search`);
const accommodationForm = document.querySelector(`.search-form`);
const formInputs = accommodationForm.querySelectorAll(`input`);
const checkinInput = accommodationForm.querySelector(`.check-in-input`);
const checkoutInput = accommodationForm.querySelectorAll(`.check-out-input`);
const adultsInput = accommodationForm.querySelectorAll(`.tourist-number-adults`);
const childrenInput = accommodationForm.querySelectorAll(`.tourist-number-children`);
const formError = accommodationForm.querySelector(`.form-error`);
let isStorageSupport = true;
let storage = ``;

accommodationForm.classList.remove(`form-nojs`);

const onShowFormButtonClick = () => {
  if (accommodationForm.classList.contains(`form-closed`)) {
    accommodationForm.classList.remove(`form-closed`);
    accommodationForm.classList.add(`form-opened`);

  } else {
    accommodationForm.classList.add(`form-closed`);
    accommodationForm.classList.remove(`form-opened`);
    // accommodationForm.classList.remove(`form-error`);
  }
  if (storage) {
    checkinInput.value = storage;
    checkoutInput.focus();
  } else {
    checkinInput.focus();
  }
}

showFormButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  onShowFormButtonClick();
});

const onWindowEscape = () => {
  if (accommodationForm.classList.contains(`form-opened`)) {
    accommodationForm.classList.remove(`form-opened`);
    accommodationForm.classList.remove(`form-error`);
    accommodationForm.classList.add(`form-closed`);
  }
}

window.addEventListener(`keydown`, (evt) => {
  if (evt.keyCode ===  ESCAPE) {
    evt.preventDefault();
    onWindowEscape();
  }
});

accommodationForm.addEventListener(`submit`, (evt) => {
  if (!checkinInput.value || !checkoutInput.value || !adultsInput.value || !childrenInput.value) {
    evt.preventDefault();
    if (formError) {
      formError.classList.remove(`form-error`);
    }
    // accommodationForm.classList.toggle(`form-error`);
    const checkError = !accommodationForm.classList.contains(`form-error`) ? accommodationForm.classList.add(`form-error`) : accommodationForm.classList.remove(`form-error`);
    // if (!accommodationForm.classList.contains(`form-error`)) {
    //   accommodationForm.classList.add(`form-error`);
    // }
    // else {
    //   accommodationForm.classList.remove(`form-error`);
    // }
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`checckin`, checkinInput.value);
      localStorage.setItem(`checckout`, checkoutInput.value);
      localStorage.setItem(`adultsAmount`, adultsInput.value);
      localStorage.setItem(`childrenAmount`, childrenInput.value);
    }
  }
});
