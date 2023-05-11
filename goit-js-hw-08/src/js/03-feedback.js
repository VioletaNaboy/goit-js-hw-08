import throttle from 'lodash.throttle';
const formInput = document.querySelector('.feedback-form');
const emailField = document.querySelector('email');
const messageField = document.querySelector('message');
function saveFormState() {
  const email = emailField.value;
  const message = messageField.value;
  const data = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
formInput.addEventListener(
  'input',
  throttle(event => {}, 500)
);
