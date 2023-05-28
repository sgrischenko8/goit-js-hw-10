import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const loader = document.querySelector('.loader');
const info = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');
select.classList.add('hidden');
const errorMessage = document.querySelector('.error');
errorMessage.classList.add('hidden');

// Creating starting markup for selector
function renderStartingMarkup() {
  fetchBreeds()
    .then(renderListOfCatsMarkup)
    .catch(error => {
      errorMessage.classList.remove('hidden');
      loader.classList.add('hidden');
      return error;
    });
}
renderStartingMarkup();

function renderListOfCatsMarkup(cats) {
  const markup = cats
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  select.innerHTML = markup;
  select.classList.remove('hidden');
  loader.classList.add('hidden');
}

// Creating markup for chosen cat
select.addEventListener('change', handler);

function handler(event) {
  info.innerHTML = '';
  loader.classList.remove('hidden');
  errorMessage.classList.add('hidden');
  const nameOfCat = event.target.value;
  renderSelectedCatMarkup(nameOfCat);
}

function renderSelectedCatMarkup(cat) {
  fetchCatByBreed(cat)
    .then(renderDescrMarkup)
    .catch(error => {
      errorMessage.classList.remove('hidden');
      loader.classList.add('hidden');
      return error;
    });
}

function renderDescrMarkup(descr) {
  if (descr.length === 0) {
    loader.classList.add('hidden');
    console.log('Response from server have no data!');

    return (info.innerHTML = `<p class="error">
        Sorry, this page not yet filled. Best people are working on that
      </p>`);
  }
  for (const el of descr) {
    const url = el.url;

    const descrMarkup = el.breeds.map(({ description, temperament, name }) => {
      return `<div class="img-container"><img alt=${name} src="${url}" height="300"/></div><div class="descr-container"><h2 class="descr-container-title">${name}</h2><p>${description}</p><p><b>Temperament: </b>${temperament}</p></div>`;
    });
    info.innerHTML = descrMarkup;
  }
  loader.classList.add('hidden');
}
