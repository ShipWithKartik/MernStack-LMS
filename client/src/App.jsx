import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/student/Home';
import ForgotPassword from './pages/ForgotPassword';
import MyLearning from './pages/student/MyLearning';
import Profile from './pages/student/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/my-learning' element={<MyLearning />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;


