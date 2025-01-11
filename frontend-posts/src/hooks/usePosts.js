import { useEffect, useState } from 'react'
import getAllPosts from '../services/getAllPosts'

function usePosts() {

  const [posts, setPosts] = useState([]);
  const [filterPosts, setFilterPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilter = (category) => {
    if (category) {
      const filtered = posts.filter(post => post.category === category);
      setSelectedCategory(category);
      setFilterPosts(filtered);
    } else {
      setFilterPosts(posts);
    }
  };

  useEffect(() => {

    const fetchPosts = async () => {

      try{
        setLoading(true);
        const data = await getAllPosts();
        const categories = [...new Set(data.map(item => item.category))];
        setPosts(data);
        setFilterPosts(data);
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
    posts: filterPosts,
    loading,
    error,
    categories,
    selectedCategory,
    handleFilter
  }
}

export default usePosts
