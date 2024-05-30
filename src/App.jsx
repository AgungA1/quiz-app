import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
function App() {
  return (
    <Router>
      <main className="flex justify-center min-h-screen  py-16">
        <section className="w-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
