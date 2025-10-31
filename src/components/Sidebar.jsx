import React from "react";
import "/src/App.css";

const Sidebar = ({ history, onSelectChat }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>GenZ AI</h3>
        <button>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
            alt="menu icon"
          />
        </button>
        <button className="new-chat" onClick={() => window.location.reload()}>
          New Chat
        </button>
      </div>

      <div className="chat-body">
        <p>Chats</p>
        <div className="chat">
          <ul className="chat-list">
            {history.length > 0 ? (
              history.map((item, index) => (
                <li
                  key={index}
                  className="chat-item"
                  onClick={() => onSelectChat(index)}
                >
                  --{" "}
                  {item.user.length > 30
                    ? item.user.slice(0, 30) + "..."
                    : item.user}
                </li>
              ))
            ) : (
              <p className="no-history">No chats yet</p>
            )}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer">
        <h3>Account Settings</h3>
      </div>
    </div>
  );
};

export default Sidebar;
