import React, { useState, useRef, useEffect } from 'react';
import SendIcon from './SendIcon';
import { UserIcon, AIIcon } from './ChatIcons';
import TypewriterEffect from './TypewriterEffect';
import './styles/ChatStyles.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        setIsLoading(true);
        const userMessage = { text: input, isUser: true };
        setMessages(prev => [...prev, userMessage]);

        try {
            const response = await fetch('http://127.0.0.1:5000/faq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: input }),
            });

            const data = await response.json();
            setIsTyping(true);
            const aiMessage = { text: data.answer, isUser: false, isNew: true };
            setMessages(prev => [...prev, aiMessage]);

        
            setTimeout(() => {
                setMessages(prev =>
                    prev.map((msg, idx) =>
                        idx === prev.length - 1 ? { ...msg, isNew: false } : msg
                    )
                );
                setIsTyping(false);
            }, data.answer.length * 20 + 100); // Adjust timing based on text length

        } catch (error) {
            console.error('Error:', error);
            const errorMessage = {
                text: "Sorry, there was an error processing your request.",
                isUser: false
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="header">
                <h1 className="title">FAQ Assistant</h1>
            </div>
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div className="message-wrapper" key={index}>
                        <div className={`message ${message.isUser ? 'user' : 'ai'}`}>
                            <div className="message-content">
                                <div className="message-icon">
                                    {message.isUser ? <UserIcon /> : <AIIcon />}
                                </div>
                                <div className="message-text">
                                    {message.isUser || !message.isNew ? (
                                        message.text
                                    ) : (
                                        <TypewriterEffect text={message.text} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-container">
                <div className="input-wrapper">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="message-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message here..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                            rows={3}
                            disabled={isLoading || isTyping}
                        />
                        <button
                            className="send-button"
                            type="submit"
                            disabled={!input.trim() || isLoading || isTyping}
                            title="Send message"
                        >
                            <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;