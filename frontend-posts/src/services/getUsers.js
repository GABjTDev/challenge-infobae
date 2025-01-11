export default async function getUsers() {

  const API_URL = import.meta.env.VITE_REACT_APP_URL_BACK + '/users'
  const res = await fetch(API_URL)
  const post = res.json()
  
  return post
}