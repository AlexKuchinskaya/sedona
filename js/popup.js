const ESCAPE = 27;
const showFormButton = document.querySelector(`.accommodation-search`);
const accommodationForm = document.querySelector(`.accommodation-form`);
const formInputs = accommodationForm.querySelectorAll(`input`);
const checkinInput = accommodationForm.querySelector(`.check-in-input`);
const checkoutInput = accommodationForm.querySelector(`.check-out-input`);
const adultsInput = accommodationForm.querySelector(`.tourist-number-adults`);
const childrenInput = accommodationForm.querySelector(`.tourist-number-children`);
let formError = accommodationForm.querySelector(`.accommodation-form-error`);
let isStorageSupport = true;
let storage = ``;

accommodationForm.classList.remove(`accommodation-form-nojs`);
const onShowFormButtonClick = () => {
  if (accommodationForm.classList.contains(`accommodation-form-closed`)) {
    accommodationForm.classList.remove(`accommodation-form-closed`);
    accommodationForm.classList.add(`accommodation-form-opened`);

  } else {
    accommodationForm.classList.add(`accommodation-form-closed`);
    accommodationForm.classList.remove(`accommodation-form-opened`);
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
  if (accommodationForm.classList.contains(`accommodation-form-opened`)) {
    accommodationForm.classList.remove(`accommodation-form-opened`);
    accommodationForm.classList.remove(`accommodation-form-error`);
    accommodationForm.classList.add(`accommodation-form-closed`);
  }
}

window.addEventListener(`keydown`, (evt) => {
  if (accommodationForm.classList.contains(`accommodation-form-opened`)) {
    if (evt.keyCode ===  ESCAPE) {
      evt.preventDefault();
      onWindowEscape();
    }
  }
});

accommodationForm.addEventListener(`submit`, (evt) => {
  if (!checkoutInput.value || !adultsInput.value || !childrenInput.value) {
    evt.preventDefault();
    accommodationForm.classList.remove(`accommodation-form-error`)
    accommodationForm.offsetWidth = accommodationForm.offsetWidth;
    accommodationForm.classList.add(`accommodation-form-error`)
  } else {
    if (isStorageSupport) {
      localStorage.setItem(`checckin`, checkinInput.value);
      localStorage.setItem(`checckout`, checkoutInput.value);
      localStorage.setItem(`adultsAmount`, adultsInput.value);
      localStorage.setItem(`childrenAmount`, childrenInput.value);
    }
  }
});
