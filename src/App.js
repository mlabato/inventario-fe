import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <section className="font-jost">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
