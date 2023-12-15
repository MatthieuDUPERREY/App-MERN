import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5030/post/", {
      message,
      author: userId,
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
