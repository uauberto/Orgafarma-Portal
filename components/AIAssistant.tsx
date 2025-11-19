import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do Grupo Orgafarma. Como posso auxiliar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    
    const responseText = await sendMessageToGemini(messages, userMsg.text);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col h-[500px]">
          
          <div className="bg-brand-dark p-5 flex justify-between items-center text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-light rounded-full blur-2xl opacity-20 -mr-4 -mt-4"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                <Sparkles size={18} className="text-brand-light" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">Orgafarma AI</h3>
                <p className="text-[10px] text-brand-light/80 uppercase tracking-wider font-bold">
                  Assistente Virtual
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-2 rounded-full transition-colors relative z-10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-brand-surface space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-dark text-white rounded-br-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                  <Loader2 size={16} className="animate-spin text-brand-light" />
                  <span className="text-xs text-gray-400 font-medium">Processando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand-light/50 border border-transparent focus-within:border-brand-light transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-2 rounded-lg ml-2 transition-all ${
                  input.trim() ? 'bg-brand-light text-white shadow-md hover:bg-brand-dark' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-gray-400">Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 rounded-full shadow-2xl shadow-brand-dark/30 transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center relative ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-brand-dark hover:bg-brand-light'
        }`}
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="text-white w-6 h-6" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-light"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;