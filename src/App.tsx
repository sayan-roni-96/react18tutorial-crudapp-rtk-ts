import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/crud_json_server/UserList';
import UserDetails from './pages/crud_json_server/UserDetails';

function App() {
  return (
    <div className="container">
      <h1 className="m-4">React18-Crudapp-Rtk-Tutorialts</h1>
      { <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userdetails/:vid" element={<UserDetails />} />
      </Routes> }
    </div>
  );
}

export default App;
