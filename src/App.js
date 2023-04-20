import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Users from "./pages/Users";

function App() {
  return (
    <section className="font-jost">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/agregar" element={<Add/>} />
      </Routes>

      <Routes>
        <Route path="/usuarios" element={<Users/>} />
      </Routes>
    </section>
  );
}

export default App;
