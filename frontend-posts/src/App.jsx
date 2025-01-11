import { useEffect, useState } from 'react'
import './App.css'
import getAllPosts from './services/getAllPosts'

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPosts = async () => {

      try{
        setLoading(true);
        const data = await getAllPosts();
        console.log(data);
        setPosts(data);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }

    fetchPosts();
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.thumbnail} alt={post.slug} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
