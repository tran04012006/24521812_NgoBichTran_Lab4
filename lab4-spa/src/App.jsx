
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <main className="app">
      <h1>Lab 4 - Multi-Route SPA</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
