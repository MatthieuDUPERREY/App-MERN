import React from "react";

const Post = (post, userId) => {
  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>{post.author}</h3>
          <p>posté le {dateFormater(post.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
