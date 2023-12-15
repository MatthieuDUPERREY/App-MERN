import React, { useEffect, useState } from "react";
import axios from "axios";

const Thread = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5030/post/").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="thread-container">
      {posts.map((post) => (
        <li>{post.message}</li>
      ))}
    </div>
  );
};

export default Thread;
