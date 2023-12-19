import React, { useEffect, useState } from "react";
import LikePost from "./LikePost";
import axios from "axios";
const Post = ({ post, userId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const handleEdit = () => {
    if (newMessage) {
      axios.put("http://localhost:5030/post/" + post._id, {
        message: newMessage,
      });
    }
  };

  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [userId]);

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
        {isEdit ? (
          <div className="edit-container">
            <textarea
              defaultValue="{post.message}"
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <button
              onClick={() => {
                setIsEdit(false);
                handleEdit();
              }}
            >
              Valider edition
            </button>
          </div>
        ) : (
          <p>{newMessage ? newMessage : post.message}</p>
        )}

        <div className="icons-part">
          <LikePost post={post} userId={userId} />
          {isAuthor && (
            <div className="update-delete-icons">
              <span
                id="update-btn"
                onClick={() => {
                  setIsEdit(!isEdit);
                  handleEdit();
                }}
              >
                &#10000;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
