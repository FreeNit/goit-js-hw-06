// * Get main elements
const formEl = document.querySelector('.login-form');
const btnSubmitEl = formEl.querySelector('button');

formEl.addEventListener('submit', handleSubmit);

// ! Callback - form submit event
function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  // console.log(elements);
  // console.log(password);
  // console.log(password.getAttribute('name'));
  // console.log(email);

  if (password.value === '' || email.value === '') {
    alert('All fields must be filled in');
  } else {
    // * collect user data into object
    const userData = {
      [password.getAttribute('name')]: password.value,
      [email.getAttribute('name')]: email.value,
    };
    console.log(userData);

    // * Clear all form input fields
    formEl.reset();
  }
}
