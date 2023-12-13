// ChatApp.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your backend server URL

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = { text: newMessage, sender: 'user' };
      socket.emit('message', message); // Send the message to the server
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', border: '1px solid #ccc', marginBottom: '10px', padding: '10px', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '5px', color: message.sender === 'user' ? 'blue' : 'green' }}>
            <strong>{message.sender === 'user' ? 'You:' : 'Bot:'}</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
        className='p-2 border-2 mr-2'
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className='bg-black rounded-md text-white p-2' onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
