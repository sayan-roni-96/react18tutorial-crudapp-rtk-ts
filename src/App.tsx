import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/crud_json_server/UserList';
import UserDetails from './pages/crud_json_server/UserDetails';
import WorkerList from './pages/crud_worker_json_server/WorkerList';
import MenuBar from './pages/Navmenu/MenuBar';

function App() {
  return (
    <div className="container">
       <MenuBar />
      <h1 className="m-4">React18-Crudapp-Rtk-Tutorialts</h1>
      { <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userdetails/:vid" element={<UserDetails />} />
        <Route path="/workerlist" element={<WorkerList />} />

      </Routes> }
    </div>
  );
}

export default App;
