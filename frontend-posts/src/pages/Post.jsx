import { useRoute } from "wouter";
import { useEffect, useState } from "react"
import getPost from "../services/getPost"

function Post() {
  const [post, setPost] = useState(null);
  const [match, params] = useRoute("/post/:id");

  // Accedes al valor del parámetro `id` de la ruta
  const id = match ? params.id : null;

  useEffect(() => {

    const fetchPost = async() => {
      const data = await getPost(id)
      console.log(data);
      setPost(data)
    }

    fetchPost();
  }, [id])

  return (
    post &&
      <div className="container-main">
      <div className="page-post-container">
        <img src={post.image} alt="" />
        <div>
          <p>{post.category}</p>
          <p>{post.updatedAt}</p>
        </div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default Post
