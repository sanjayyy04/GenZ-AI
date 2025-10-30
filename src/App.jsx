import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Input_box from "./components/Input_box.jsx";
import Main_body from "./components/Main_body.jsx";
import "./App.css";

const App = () => {
  //  Shared state between Input_box and Main_body
  const [responseText, setResponseText] = useState("");
  const [input_val, setInput] = useState("");
  //to store the chat history
  const [history, sethistory] = useState([]);

  return (
    <div>
      <Header />
      <Main_body
        responseText={responseText}
        input_val={input_val}
        setInput={setInput}
        history={history}
      />
      <Input_box
        setResponseText={setResponseText}
        input_val={input_val}
        setInput={setInput}
        history={history}
        sethistory={sethistory}
      />
    </div>
  );
};

export default App;
