const form = document.getElementById('form');
const cardName = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('mm');
const cardYear = document.getElementById('yy');
const cardCvc = document.getElementById('cvc');

const nameError = document.getElementById('name-error');
const cardError = document.getElementById('card-error');
const dateError = document.getElementById('date-error');
const cvcError = document.getElementById('cvc-error');
const submitError = document.getElementById('submit-error');

const thankYouSection = document.querySelector('.thank-you-section');

const submitBtn = document.getElementById('submit-btn');

// event listeners
cardNumber.addEventListener('keyup', getCardNumbers);
cardName.addEventListener('keyup', getName);
cardMonth.addEventListener('keyup', getMonth);
cardYear.addEventListener('keyup', getYear);
cardCvc.addEventListener('keyup', getCvc);
submitBtn.addEventListener('click', validateForm);

// functions

function getName() {
  const input = cardName.value.trim();
  document.getElementById('card-name').innerHTML = input;

  if (!input) {
    nameError.innerHTML = "Can't be blank";
    return false;
  }

  if (!input.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }

  nameError.innerHTML = '';
  return true;
}

function getCardNumbers() {
  const input = cardNumber.value
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
  document.getElementById('card-zeroes').innerHTML = input;

  const input2 = cardNumber.value;

  if (!input2) {
    cardError.innerHTML = "Can't be blank";
    return false;
  }

  if (/\s/g.test(input2)) {
    cardError.innerHTML = 'Write without spaces';
    return false;
  }

  if (!/^[0-9]+$/.test(input2)) {
    cardError.innerHTML = 'Write only numbers';
    return false;
  }

  if (input2.length < 16) {
    cardError.innerHTML = 'You have to write 12 numbers';
    return false;
  }

  cardError.innerHTML = '';
  return true;
}

function getMonth() {
  const input = cardMonth.value;
  document.getElementById('card-exp-mm').innerHTML = input;

  if (!input) {
    dateError.innerHTML = "Can't be blank";
    return false;
  }

  if (!/^[0-9]+$/.test(input)) {
    dateError.innerHTML = 'Write only numbers';
    return false;
  }

  dateError.innerHTML = '';
  return true;
}

function getYear() {
  const input = cardYear.value;
  document.getElementById('card-exp-yy').innerHTML = input;

  if (!input) {
    dateError.innerHTML = "Can't be blank";
    return false;
  }

  if (!/^[0-9]+$/.test(input)) {
    dateError.innerHTML = 'Write only numbers';
    return false;
  }

  dateError.innerHTML = '';
  return true;
}

function getCvc() {
  const input = cardCvc.value;
  document.getElementById('card-cvc').innerHTML = input;

  if (!input) {
    cvcError.innerHTML = "Can't be blank";
    return false;
  }

  if (!/^[0-9]+$/.test(input)) {
    cvcError.innerHTML = 'Write only numbers';
    return false;
  }

  cvcError.innerHTML = '';
  return true;
}

function validateForm(e) {
  e.preventDefault();
  if (
    !getName() ||
    !getCardNumbers() ||
    !getMonth() ||
    !getYear() ||
    !getCvc()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please check for errors first';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  } else {
    form.style.display = 'none';
    thankYouSection.classList.remove('hide');
    return true;
  }
}

///////////////////////////////

/* function isItNumber(e) {
  if (isFinite(e.key) || e.key === 'Backspace') {
  } else if (e.key.length === 1 || e.key === '.') {
    e.preventDefault();
  }
} */

/* form.addEventListener('submit', e => {
  let errors = [];
  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

  if (errors.length > 0) {
    e.preventDefault();
  }
}); */
