import React from 'react';


const Chatsection = ({messages}) => {
    

    return (
        <div className="chatBody">
        {/* <div>I am chat Section</div> */}
        <div className="messageBody">
            { messages.map(message =>(
                <p className={`chat-message ${message.received && "chat-receiver"}`}>
                <span className="chatName">
                    {message.name}
                </span>
                {message.chats}
            </p>
            ))
                
            }
            {/* <p className="chat-message">
                <span className="chatName">
                    Preetam
                </span>
                This is my message.
            </p> */}

            
        </div>
        <div className="chat-footer">
            <form>
            <input 
                type="text" 
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
                placeholder = "Type message"
            />
            <button
                // onClick={sendMessage}
                type="submit"
            >
                Send
            </button>
            </form>
        </div>
        </div>
    );
}

export default Chatsection;