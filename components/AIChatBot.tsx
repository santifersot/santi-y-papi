
import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Hola Alex! Soy tu entrenador Fitnavi. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askGemini(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-surface-light dark:bg-surface-dark w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-border-dark flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-background-dark">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold">Entrenador AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-background-dark/70 hover:text-background-dark">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-background-dark font-medium rounded-tr-none' 
                    : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white rounded-tl-none border border-slate-200 dark:border-white/10'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-2xl animate-pulse">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <button type="submit" disabled={isLoading} className="bg-primary text-background-dark size-10 rounded-xl flex items-center justify-center disabled:opacity-50">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary size-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-background-dark hover:scale-110 transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl">voice_chat</span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
