import { useEffect, useState } from 'react'
import getAllPosts from '../services/getAllPosts'

function usePosts() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {

      try{
        setLoading(true);
        const data = await getAllPosts();
        console.log(data);
        const categories = [...new Set(data.map(item => item.category))];
        setPosts(data);
        setCategories(categories);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }

    fetchPosts();
  }, [])

  return {
    posts,
    loading,
    error,
    categories
  }
}

export default usePosts
