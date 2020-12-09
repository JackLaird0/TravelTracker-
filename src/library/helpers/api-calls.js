export const fetchGetRequest = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
