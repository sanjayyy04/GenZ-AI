import React, { useRef, useEffect } from "react";
import { API_URL, API_KEY } from "./constant";
import "/src/App.css";

const Input_box = ({
  input_val,
  setInput,
  history,
  setHistory,
  setloading,
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

    setloading(true); //  start loader

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      });

      const data = await response.json();
      console.log("Gemini Response:", data);

      let textResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No text response from GenZ AI.";

      textResponse = textResponse
        .split("* ")
        .map((item) => item.trim())
        .filter((item) => item !== "")
        .join("\n ");

      const newEntry = { user: input, ai: textResponse };
      setHistory((prev) => [...prev, newEntry]);
      setInput("");
    } catch (error) {
      console.error("Error fetching data:", error);
      const errorEntry = {
        user: input,
        ai: "There was an error processing your request. Please try again...",
      };
      setHistory((prev) => [...prev, errorEntry]);
      setInput("");
    } finally {
      setloading(false); // ✅ stop loader when done
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
