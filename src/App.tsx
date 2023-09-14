import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Profile from './Profile';
import './index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
};

export default App
