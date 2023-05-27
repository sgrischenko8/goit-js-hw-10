const API =
  'live_n3UYEOgHq1vulPu4bhOr8XCLL7jQR50Uo632WcRjJ8pnjA6EZHNLsozH2JROaIOA';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

function fetchBreeds() {
  const paramse = {
    'x-api-key': API,
  };
  return fetch(`${BASE_URL}?${paramse}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchBreeds };

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchCatByBreed };
