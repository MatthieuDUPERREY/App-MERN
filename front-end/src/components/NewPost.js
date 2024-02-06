import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../feature/post.slice";
const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      message,
      author: userId,
      _id: Date.now(),
    };

    axios.post("http://localhost:5700/post/", data).then(() => {
      dispatch(createPost(data));
      dispatch(getPosts());
    });
    setMessage("");
  };

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's up ?"
        value={message}
      ></textarea>
      <input type="submit" value="Envoyez" />
    </form>
  );
};

export default NewPost;
