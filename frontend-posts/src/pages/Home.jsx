import usePosts from "../hooks/usePosts"

function Home() {

  const {posts, loading, error, categories} = usePosts()

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>Our Blog Posts</h1>

      <div className="container-filter-buttons">
        {categories.map((category, index) => (
          <button key={`${category}_${index}`}>{category}</button>
        ))}
      </div>

      <div className="container-posts">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.thumbnail} alt={post.slug} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
