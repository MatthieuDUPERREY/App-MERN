import React, { useState } from "react";

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
    </div>
  );
};

export default App;
