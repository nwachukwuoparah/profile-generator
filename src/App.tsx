import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Profile from './Profile';
import './index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='AppMain'>
      <div className='AppImageMain'>
        <img src='/ThecurveLogo.svg' />
      </div>
      <div className='AppContentWrap'>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
};

export default App
