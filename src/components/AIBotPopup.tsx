import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, User, Send, Sparkles } from 'lucide-react';

interface AIBotPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: React.ReactNode;
};

const ALL_SUGGESTIONS = [
  "What are your skills?",
  "Show me your projects",
  "How can I contact you?",
  "How can I hire you?",
  "What are your rates?"
];

export default function AIBotPopup({ isOpen, onClose }: AIBotPopupProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: "Hey there! 👋 I'm Murugan's AI assistant. I can tell you all about his skills, projects, experience, and more. What would you like to know?"
    }
  ]);
  const [availableSuggestions, setAvailableSuggestions] = useState<string[]>(ALL_SUGGESTIONS);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) {
      // Optional: Reset when closed, or keep state so they don't lose chat history
      // We'll keep the history for a better UX, but you can reset if preferred.
    }
  }, [isOpen]);

  const handleRedirect = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Remove the suggestion if it was clicked
    setAvailableSuggestions(prev => prev.filter(s => s !== text));

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse: React.ReactNode = "I'm still learning about Murugan, but I can tell you he's an amazing developer! Try asking about his skills, projects, or how to contact him.";
      
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('skill') || lowerText.includes('frontend') || lowerText.includes('database')) {
        botResponse = (
          <div className="flex flex-col gap-2">
            <strong>Murugan's Key Skills:</strong>
            <p>🎨 <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</p>
            <p>⚙️ <strong>Backend:</strong> Node.js, Python, Express</p>
            <p>🗄️ <strong>Database:</strong> PostgreSQL, MongoDB</p>
            <button 
              onClick={() => handleRedirect('skills')}
              className="mt-2 text-[11px] bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 py-1.5 px-3 rounded-full self-start transition-colors"
            >
              View Skills Section →
            </button>
          </div>
        );
      } else if (lowerText.includes('project') || lowerText.includes('work')) {
        botResponse = (
          <div className="flex flex-col gap-2">
            <p>Murugan has built several scalable web platforms with modern UI/UX principles, powered by React.js and TypeScript.</p>
            <button 
              onClick={() => handleRedirect('projects')}
              className="mt-2 text-[11px] bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 py-1.5 px-3 rounded-full self-start transition-colors"
            >
              Explore Projects →
            </button>
          </div>
        );
      } else if (lowerText.includes('contact') || lowerText.includes('hire') || lowerText.includes('rate')) {
        botResponse = (
          <div className="flex flex-col gap-2">
            <p>Murugan is currently available for opportunities! You can reach out directly via email or phone, or use the contact form.</p>
            <div className="mt-1 flex flex-col gap-1 text-[13px] text-zinc-300 bg-black/20 p-2 rounded-lg border border-white/5">
              <span className="flex items-center gap-2">
                <span className="text-zinc-400">📧</span>
                <a href="mailto:murugan25oct@gmail.com" className="text-orange-400 hover:underline">murugan25oct@gmail.com</a>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-zinc-400">📞</span>
                <a href="tel:+918778987102" className="text-orange-400 hover:underline">+91 8778987102</a>
              </span>
            </div>
            <button 
              onClick={() => handleRedirect('contact')}
              className="mt-2 text-[11px] bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 py-1.5 px-3 rounded-full self-start transition-colors"
            >
              Send a Message Form →
            </button>
          </div>
        );
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'bot', text: botResponse }]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] pointer-events-auto" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-24 right-6 md:right-12 w-[calc(100vw-48px)] sm:w-[400px] bg-[#0f0f15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[550px] max-h-[75vh] font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-300">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-zinc-100 font-semibold text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-xs text-green-400 font-medium mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600' : 'bg-white/10'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-zinc-300" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm' 
                      : 'bg-white/5 text-zinc-200 border border-white/5 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center bg-white/10">
                    <Sparkles size={14} className="text-zinc-300" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions - Show up to 3 at a time */}
            {availableSuggestions.length > 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {availableSuggestions.slice(0, 3).map((suggestion, idx) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    className="self-start text-left text-xs text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 pt-2 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Message..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-white/20 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
