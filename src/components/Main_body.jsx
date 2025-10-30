import React from "react";
import "/src/App.css";

const Main_body = ({ responseText, history }) => {
  // Function to render formatted text safely
  const formatText = (text) => {
    if (!text) return "";

    // Convert * bullets to HTML list items
    const formatted = text
      .replace(/\*\*(.*?)\*\*/g, "<br><strong class='heading'>$1</strong><br>") // bold formatting
      .replace(/\*\*(.*?)\*/g, "<br><strong>$1</strong><br>") // bold formatting
      .replace(/\n• /g, "<br>• ") // handle new lines and bullets
      .replace(/\n/g, "<br>") // ensure line breaks display properly
      .trim();

    return formatted;
  };

  return (
    <div>
      {responseText ? (
        <div className="ans-msg">
          <p
            className="response-text"
            dangerouslySetInnerHTML={{ __html: formatText(responseText) }}
          ></p>
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
