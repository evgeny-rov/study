const form = document.querySelector('form.feedback-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const parentDiv = document.createElement('div');
  const pEl = document.createElement('p');
  pEl.textContent = 'Feedback has been sent';
  const email = document.createElement('div');
  email.textContent = `Email: ${formData.get('email')}`;
  const name = document.createElement('div');
  name.textContent = `Name: ${formData.get('name')}`;
  const comment = document.createElement('div');
  comment.textContent = `Comment: ${formData.get('comment')}`;
  const appender = [pEl, email, name, comment];
  appender.forEach((it) => parentDiv.appendChild(it));

  form.parentNode.replaceChild(parentDiv, form);
})

/////teacher's solution

const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${email}</div>
    <div>Name: ${name}</div>
    <div>Comment: ${comment}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const formElement = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
  };
  formElement.addEventListener('submit', handle);
};