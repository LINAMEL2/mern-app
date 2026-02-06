import { useEffect, useState } from "react";
import { fetchTest } from "./api";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTest().then(data => setMessage(data.message || "Backend OK"));
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 MERN App en Production ! 🔥</h1>
      <p>Message du backend : {message}</p>
    </div>
  );
}

export default App;
