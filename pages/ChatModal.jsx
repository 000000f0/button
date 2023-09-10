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
        const serverEndpoint = 'http://54.77.216.40:8000'; // Replace with your server's endpoint URL
        const response = await axios.post(serverEndpoint, { message: newMessage });
        const botResponseText = response.data.bot_response;
        const botResponse = { text: botResponseText, sender: 'bot' };
        setMessages([...messages, botResponse]);
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
    <div className={`chat-modal ${isDarkMode ? 'dark-mode' : ''}`} style={{backgroundColor: !isDarkMode? '#fff' : '#704214',border:'3px solid #704214'}}>
      <div className="chat-header">
        <h2 style={{paddingLeft:'100px'}}>Chat History</h2>
        <button onClick={onClose}
        
        style={{
          backgroundColor: '#704214',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
        }}
        
        
        >Close</button>
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
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatModal;
