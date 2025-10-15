import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ChatWidget.css';

const formatTime = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hello! I'm Raghavendra Dinesh's Portfolio Assistant. You can ask me about his skills, projects, education, or experience.",
      time: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const autoOpenedRef = useRef(false);

  const endpoint = useMemo(() => {
    const ref = process.env.REACT_APP_SUPABASE_PROJECT_REF;
    const custom = process.env.REACT_APP_RAG_EDGE_URL;
    if (custom) return custom.replace(/\/$/, '') + '/rag-chat';
    if (ref) return `https://${ref}.functions.supabase.co/rag-chat`;
    return '';
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    // Auto-open once per session and play a short chime
    if (autoOpenedRef.current) return;
    const already = (() => {
      try { return sessionStorage.getItem('chatAutoOpened') === '1'; } catch { return false; }
    })();
    if (already) { autoOpenedRef.current = true; return; }
    const timer = setTimeout(() => {
      autoOpenedRef.current = true;
      try { sessionStorage.setItem('chatAutoOpened', '1'); } catch {}
      setOpen(true);
      tryPlayChime();
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  function tryPlayChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      gain.connect(ctx.destination);

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(660, now);
      osc1.connect(gain);
      osc1.start(now);
      osc1.stop(now + 0.12);

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.14);
      osc2.connect(gain);
      osc2.start(now + 0.14);
      osc2.stop(now + 0.28);
    } catch {}
  }

  async function sendMessage() {
    const q = input.trim();
    if (!q || loading) return;
    setLoading(true);
    const userMsg = { id: String(Date.now()), role: 'user', text: q, time: new Date() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    try {
      if (!endpoint) throw new Error('Missing RAG function endpoint configuration');
      // include recent chat history (last 8 messages)
      const history = messages.slice(-8).map(m => ({ role: m.role, text: m.text }));
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY || ''}`,
          'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY || ''
        },
        body: JSON.stringify({ question: q, k: 5, history })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Request failed');
      const text = data?.answer || 'I could not find an answer.';
      const assistantMsg = { id: String(Date.now() + 1), role: 'assistant', text, time: new Date() };
      setMessages((m) => [...m, assistantMsg]);
    } catch (e) {
      const assistantErr = { id: String(Date.now() + 2), role: 'assistant', text: String(e), time: new Date() };
      setMessages((m) => [...m, assistantErr]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className={`chat-root ${open ? 'open' : ''}`}>
      {!open && (
        <button className="chat-fab" onClick={() => setOpen(true)} aria-label="Open chat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12c0 3.866-3.582 7-8 7-1.257 0-2.444-.242-3.5-.674L4 19l.764-3.059C4.28 15.02 4 13.544 4 12c0-3.866 3.582-7 8-7s8 3.134 8 7Z" stroke="#fff" strokeWidth="1.4"/>
          </svg>
        </button>
      )}
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div className="chat-title">
              <div className="chat-avatar">AI</div>
              <div>
                <div>Portfolio Assistant</div>
                <div className="chat-subtitle">Online • Ask about skills, projects, education</div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`msg ${m.role}`}>
                <div className="bubble">
                  <div className="text">{m.text}</div>
                  <div className="meta">{formatTime(m.time)}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="msg assistant"><div className="bubble"><div className="typing"><span/><span/><span/></div></div></div>
            )}
          </div>
          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about skills, projects, education..."
              rows={1}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()} className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}


