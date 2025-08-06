import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginCard from "./components/LoginCard";
import Register from "./components/Register";
import Reset from './components/reset';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset/>}/>
      
      </Routes>
  );
};

export default App;
