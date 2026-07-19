import { useState } from "react";

export default function App() {
  const [json, setJson] = useState(null);

  // API route simulation: /api/generate
  function apiGenerate() {
    return {
      success: true,
      pin: String(Math.floor(Math.random() * 10000))
        .padStart(4, "0")
    };
  }

  function handleGenerate() {
    const response = apiGenerate();
    setJson(response);
  }

  return (
    <div>
      <h1>Generate PIN</h1>

      <button onClick={handleGenerate}>
        GET /api/generate
      </button>

      <pre>
        {json && JSON.stringify(json, null, 2)}
      </pre>
    </div>
  );
}
