import throttle from 'lodash.throttle';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
// target никогда не меняется, поэтому лучше его использовать, а не currentTarget

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const object = JSON.parse(savedMessage);

  if (savedMessage) {
    refs.textarea.value = object.message;
    refs.input.value = object.name;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

const formData = {};

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  // console.log(formData);

  const formDataJSON = JSON.stringify(formData);
  // console.log(JSON.stringify(formData));

  const savedMsg = localStorage.setItem(STORAGE_KEY, formDataJSON);
});
