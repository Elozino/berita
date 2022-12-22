export const fetchApi = (URI: string) => {
  fetch(URI)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};
