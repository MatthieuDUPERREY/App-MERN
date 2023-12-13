import React, { useState } from "react";
import NewPost from "./components/NewPost";
import Thread from "./components/Thread";

const App = () => {
  const [userId, setUserId] = useState("");

  return (
    <div className="app_container">
      <div className="login">
        <h3>Hello</h3>
        <input
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <NewPost userId={userId} />
      <Thread userId={userId} />
    </div>
  );
};

export default App;
