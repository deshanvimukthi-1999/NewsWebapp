import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Single = () => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`api/posts/${id}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <div className="info">
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=${id}`} state={post}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>
        </div>
        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
    </div>
  );
};

export default Single;
