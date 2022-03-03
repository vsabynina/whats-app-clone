import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "src/pages/AuthPage";
import ChatPage from "src/pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
