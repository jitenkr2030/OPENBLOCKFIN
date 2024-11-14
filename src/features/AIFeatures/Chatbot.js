// src/features/AIFeatures/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const sendMessage = () => {
    const newMessages = [...messages, { sender: 'User', text: userMessage }];
    setMessages(newMessages);
    setUserMessage('');
    getBotResponse(newMessages);
  };

  const getBotResponse = (messages) => {
    const botResponse = 'How can I help you with your finances today?';
    setMessages([
      ...messages,
      { sender: 'Bot', text: botResponse },
    ]);
  };

  return (
    <div className="chatbot">
      <h2>Chat with Financial Assistant</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'Bot' ? 'bot' : 'user'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
