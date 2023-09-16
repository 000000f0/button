import React, { useState, useRef } from 'react';
import axios from 'axios';

const ChatModal = ({ isDarkMode, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatHistoryRef = useRef(null);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };
      // Update the chat history by appending the user's message
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage('');

      try {
        const serverEndpoint = 'https://deva.ark4.xyz'; // Update with your server URL
        const response = await axios.post(
          serverEndpoint,
          { user_input: newMessage },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const botResponseText = response.data.response;
        const botResponse = { text: botResponseText, sender: 'bot' };
        // Append the bot's response to the chat history
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

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
        ))}
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
