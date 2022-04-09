import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Main } from "./pages/main";
import { PrivateRoute } from "./components/private-root";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<PrivateRoute />} >
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
