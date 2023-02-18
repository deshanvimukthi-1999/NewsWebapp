import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";


const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://news-api-deshan.herokuapp.com/api/posts${cat}`);
        console.log(res);
        setPosts(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      <div className="posts">
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
            <h1>{post.title}</h1>
            <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  )
}



export default Home