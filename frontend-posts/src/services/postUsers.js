export default async function postUser(decoded) {
  const API_URL = import.meta.env.VITE_REACT_APP_URL_BACK + '/users'
  const {name, picture} = decoded;
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      picture
    })
  })
  .then(response => response.json()) 
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });
}