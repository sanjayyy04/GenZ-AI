import React from "react";
import "/src/App.css";

const Main_body = ({ history, loading }) => {
  const formatText = (text) => {
    if (!text) return "";
    return (
      text
        // Main heading → **text**
        .replace(
          /\*\*(.*?)\*\*/g,
          "<br><strong class='heading'>$1</strong><br>"
        )
        // Subheading → *text*
        .replace(
          /\*\*(.*?)\*/g,
          "<br><strong class='sub-heading'>$1</strong><br>"
        )
        // Bullet points
        .replace(/\n• /g, "<br>• ")
        // Line breaks
        .replace(/\n/g, "<br>")
        .trim()
    );
  };

  return (
    <div className="main-body">
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : history && history.length > 0 ? (
        <div className="chat-container ans-msg">
          {history.map((item, index) => (
            <div key={index} className="chat-bubble chat-entry">
              <div className="user-msg">
                <strong>You:</strong>&nbsp;{item.user}
              </div>
              <div
                className="ai-msg"
                dangerouslySetInnerHTML={{
                  __html: formatText(item.ai),
                }}
              ></div>
            </div>
          ))}
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
