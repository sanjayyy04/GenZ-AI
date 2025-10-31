import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Input_box from "./components/Input_box.jsx";
import Main_body from "./components/Main_body.jsx";
import "./App.css";

const App = () => {
  const [history, setHistory] = useState([]); // store all chats
  const [input_val, setInput] = useState("");
  const [loading, setloading] = useState(false); //  should be false (boolean)

  return (
    <div>
      <Header />
      <Main_body history={history} loading={loading} />
      <Input_box
        input_val={input_val}
        setInput={setInput}
        history={history}
        setHistory={setHistory}
        loading={loading}
        setloading={setloading}
      />
    </div>
  );
};

export default App;
