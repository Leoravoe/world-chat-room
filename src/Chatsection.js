import React from 'react';


const Chatsection = () => {
    

    return (
        <div className="chatBody">
        {/* <div>I am chat Section</div> */}
        <div className="messageBody">
            <p className="chat-message">
                <span className="chatName">
                    Preetam
                </span>
                This is my message.
            </p>

            <p className="chat-message chat-receiver">
                <span className="chatName">
                    Preetam
                </span>
                This is my message.
            </p>
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