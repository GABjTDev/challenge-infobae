export default async function getAllPosts() {
  const url = 'https://jsonplaceholder.org/posts'

  const res = await fetch(url)
  const posts = res.json()

  return posts
}