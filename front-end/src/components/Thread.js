import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
const Thread = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5700/post/").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="thread-container">
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} />
        ))}
    </div>
  );
};

export default Thread;
