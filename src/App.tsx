import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthCheck from "./hooks/AuthCheck";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
