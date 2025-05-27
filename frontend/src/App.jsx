import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/DashBoard";
import SendMoney from "./pages/SendMoney";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route can redirect to /signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
