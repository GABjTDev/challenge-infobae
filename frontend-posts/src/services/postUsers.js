export default async function postUser(decoded) {
  const {name} = decoded;
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name
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