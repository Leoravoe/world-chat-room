import React from 'react';
import './App.css';
import Chatsection from './Chatsection';

function App() {
  return (
    <div className="app">
      <h1>My whatsapp clone</h1>
      <div className="app-body">
        {/* Chat component */}
        <Chatsection />
      </div>
    </div>
  );
}

export default App;
