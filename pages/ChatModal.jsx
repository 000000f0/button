import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatModal = ({ isDarkMode, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatHistoryRef = useRef(null);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };
      setMessages([...messages, userMessage]);
      setNewMessage('');

      try {
        const lambdaEndpoint = 'https://xsvv3p3cbkqtmljxahna3ony540oyoom.lambda-url.eu-west-1.on.aws/'; // Replace with your Lambda endpoint URL
        const jsonPayload = { clientmessage: newMessage };
        
        const lambdaResponse = await axios.post(lambdaEndpoint, jsonPayload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const responseMessage = { text: lambdaResponse.data, sender: 'lambda' };
        setMessages([...messages, responseMessage]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`chat-modal ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="chat-header">
        <h2>Chat History</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="chat-history" ref={chatHistoryRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        )).reverse()}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatModal;
