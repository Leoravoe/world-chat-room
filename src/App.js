import React, {useEffect} from 'react';

import './App.css';
import Chatsection from './Chatsection';

function App() {
  useEffect(() =>{
    const pusher = new Pusher(process.env.REACT_APP_PUSHERID, {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  },[])
  return (
    <div className="app">
      {/* <h1>My whatsapp clone</h1> */}
      <div className="app-body">
        {/* Chat component */}
        <Chatsection />
      </div>
    </div>
  );
}

export default App;
