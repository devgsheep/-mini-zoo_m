import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<div>main</div>} />
        <Route path={"/history"} element={<div>history</div>} />
      </Routes>
    </Router>
  );
}

export default App;
