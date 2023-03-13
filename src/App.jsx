import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-5xl font-black text-transparent selection:bg-transparent">
      Vite + React + Tailwindcss v3
    </p>
        
  );
}

export default App;
