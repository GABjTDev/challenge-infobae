export default async function getPost(id) {
  const url = `https://jsonplaceholder.org/posts/${id}`

  const res = await fetch(url)
  const post = res.json()

  return post
}