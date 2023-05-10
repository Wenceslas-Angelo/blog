import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import UpdatePost from './pages/UpdatePost';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/update/:id" element={<UpdatePost />} />
      </Routes>
    </div>
  );
}

export default App;
