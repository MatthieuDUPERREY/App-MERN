import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");
  const handleForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5050/post", {
      message,
      author: userId,
    });
  };

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Hello world"
      ></textarea>
      <input type="submit" value="Envoyez le formulaire" />
    </form>
  );
};

export default NewPost;
