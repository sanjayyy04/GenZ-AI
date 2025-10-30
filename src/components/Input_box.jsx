import React, { useState, useRef, useEffect } from "react";
import { API_URL, API_KEY } from "./constant";
import "/src/App.css";

const Input_box = ({
  setResponseText,
  input_val,
  setInput,
  history,
  sethistory,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input_val]);

  const fetchData = async (input) => {
    if (!input.trim()) return;

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      });

      const data = await response.json();
      console.log("Gemini Response:", data);

      let textResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        " No text response from Gemini.";

      //  Format the response text
      textResponse = textResponse
        .split("* ") // split on "* "
        .map((item) => item.trim()) // remove extra spaces
        .filter((item) => item !== "") // ignore empty parts
        .join("\n "); // join back with bullet symbols

      //  Add this conversation to history
      const newEntry = { user: input, ai: textResponse };
      sethistory([...history, newEntry]);

      //  Send the formatted response up to App.jsx
      setResponseText(textResponse);
      setInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseText(" Error connecting to the Gemini API.");
      const errorEntry = {
        user: input,
        ai: "❌ Error connecting to the Gemini API.",
      };
      sethistory([...history, errorEntry]);
    }
  };

  return (
    <div className="input_box_container">
      <div className="input_box">
        <textarea
          ref={textareaRef}
          placeholder="Ask GenZ AI"
          value={input_val}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          className="auto-textarea"
        />
        <button onClick={() => fetchData(input_val)} disabled={!input_val}>
          <img src="./src/assets/search.png" alt="send" />
        </button>
      </div>
    </div>
  );
};

export default Input_box;
