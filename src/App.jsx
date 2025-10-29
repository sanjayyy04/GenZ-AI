import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Input_box from "./components/Input_box.jsx";
import Main_body from "./components/Main_body.jsx";
import "./App.css";

const App = () => {
  // ✅ Shared state between Input_box and Main_body
  const [responseText, setResponseText] = useState("");
 

  return (
    <div>
      <Header />
      {/* Pass the AI response to Main_body */}
      <Main_body responseText={responseText} />
      {/* Pass the setter so Input_box can update it */}
      <Input_box setResponseText={setResponseText} />
    </div>
  );
};

export default App;
