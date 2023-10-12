import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/companies' element={<Companies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
