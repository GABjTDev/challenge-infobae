export default async function getUsers() {
  const url = `http://localhost:3000/users`

  const res = await fetch(url)
  const post = res.json()

  return post
}