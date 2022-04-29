import React, { useState, useEffect } from "react"
import "./App.css"
import Post from "./Components/Post"
import Pagination from "./Components/Pagination"


const url = 'https://jsonplaceholder.typicode.com/posts';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("")
  console.log("posts",posts)
  
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <div className="searchbox">
        <input placeholder="Search....."  onChange={event => setQuery(event.target.value)}/>
      </div>
      {
       posts.filter(post => {
        if (query === '') {
          return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      })
      .length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={5}
          />
        </>
      ) : (
        <h1>Posts</h1>
      )}
    </div>
  );
}
