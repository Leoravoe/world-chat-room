import React, {useEffect} from 'react';

import './App.css';
import Chatsection from './Chatsection';

function App() {
  useEffect(() =>{
    const pusher = new Pusher(process.env.REACT_APP_PUSHERID, {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
  })
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
