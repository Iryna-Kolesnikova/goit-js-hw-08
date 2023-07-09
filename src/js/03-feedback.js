import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

loadFormState();
function saveFormState() {
    const state = {
        email: emailInput.value,
message: messageInput.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
}
function loadFormState() {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const state = JSON.parse(savedState);
        emailInput.value = state.email || '';
        messageInput.value = state.message || '';
    }
}
function handleSubmit(even) {
    even.preventDefault();
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(state);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
        messageInput.value = '';

}