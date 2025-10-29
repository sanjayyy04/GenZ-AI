import React from "react";
import "/src/App.css";

const Main_body = ({ responseText }) => {
  return (
    <div>
      {responseText ? (
        <div className="ans-msg">
          <p>{responseText}</p>
        </div>
      ) : (
        <div className="welcome-msg">
          <h1 className="main-body-title">Welcome to GenZ AI</h1>
          <p className="main-body-subtitle">
            Your personal AI assistant for all things GenZ!
          </p>
        </div>
      )}
    </div>
  );
};

export default Main_body;
