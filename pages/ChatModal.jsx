import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatModal = ({ isDarkMode, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatHistoryRef = useRef(null);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const userMessage = { text: newMessage, sender: 'user' };
      setMessages([...messages, userMessage]); // Update the chat history with the user's message
      setNewMessage('');

      try {
        const serverEndpoint = 'https://deva.ark4.xyz'; // Updated endpoint URL
        const response = await axios.post(
          `${serverEndpoint}/process_text`, // Send the message to the server
          JSON.stringify({ text: newMessage }), // Convert the object to a JSON string
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const botResponseText = response.data.response;
        const botResponse = { text: botResponseText, sender: 'bot' };
        setMessages([...messages, botResponse]); // Update the chat history with the bot's response
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
