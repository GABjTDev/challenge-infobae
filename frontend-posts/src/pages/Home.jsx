import usePosts from "../hooks/usePosts"
import { Link } from 'wouter';

function Home() {

  const {posts, loading, error, categories, handleFilter, selectedCategory} = usePosts()

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="container-main">
      <h1>Our Blog Posts</h1>

      <div className="container-filter-buttons">
        {categories.map((category, index) => (
          <button 
            key={`${category}_${index}`} 
            onClick={() => handleFilter(category)}
            className={selectedCategory === category ? 'active' : ''}
          >{category}</button>
        ))}
      </div>

      <div className="container-posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-image">
              <p className="badge-category">{post.category}</p>
              <img src={post.thumbnail} alt={post.slug} />
            </div>
            <div className="post-info">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <Link 
                className="post-button"
                to={`/post/${post.id}`}
              >
                More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
