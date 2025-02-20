import React, { useState } from 'react';
import { Send, Bot, User, Loader } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your learning assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: 'This is a mock response. In a real implementation, this would come from your AI backend.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 h-[calc(100vh-theme(spacing.16))] bg-background-light dark:bg-background-dark flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
          AI Learning Assistant
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          Ask questions about your courses or get help with your learning journey
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`rounded-full p-2 ${
                message.type === 'user' 
                  ? 'bg-primary-500'
                  : 'bg-surface-light dark:bg-surface-dark'
              }`}>
                {message.type === 'user' 
                  ? <User className="h-5 w-5 text-white" />
                  : <Bot className="h-5 w-5 text-primary-500" />
                }
              </div>
              <div
                className={`p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark'
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg flex items-center space-x-2">
              <Loader className="h-5 w-5 animate-spin text-primary-500" />
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Thinking...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border 
                   border-border-light dark:border-border-dark
                   bg-surface-light dark:bg-surface-dark
                   text-text-primary-light dark:text-text-primary-dark
                   placeholder-text-secondary-light dark:placeholder-text-secondary-dark
                   focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-3 rounded-lg bg-primary-500 text-white 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-primary-600 dark:hover:bg-primary-400"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;