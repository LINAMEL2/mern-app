import { useEffect, useState } from "react";
import { fetchTest } from "./api";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTest().then(data => setMessage(data.message || "Backend OK"));
  }, []);

  return (
    <div className="App">
      <h1>MERn App Déployée!</h1>
      <p>Message du backend : {message}</p>
    </div>
  );
}

export default App;
