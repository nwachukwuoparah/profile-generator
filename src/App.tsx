import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Profile from './Profile';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>


  )
}

export default App
