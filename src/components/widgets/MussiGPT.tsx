'use client';

import {useState, useRef, useEffect, useCallback} from 'react';
import {useTranslations} from 'next-intl';

interface Message {
  text: string;
  isUser: boolean;
}

interface Rule {
  keys: string[];
  response: string;
}

const RULES: Rule[] = [
  {keys: ['chicken', 'egg', 'galinha', 'ovo', 'what came first', 'quem veio primeiro'], response: 'chicken'},
  {keys: ['star wars', 'starwars', 'jedi', 'sith', 'darth', 'yoda', 'force be with', 'lightsaber', 'luke', 'vader', 'may the force'], response: 'starwars'},
  {keys: ['harry potter', 'hogwarts', 'wizard', 'voldemort', 'dumbledore', 'expelliarmus', 'avada', 'muggle', 'gryffindor', 'slytherin', 'bruxo', 'grifinoria', 'sonserina'], response: 'harrypotter'},
  {keys: ['sudo'], response: 'sudo'},
  {keys: ['console.log', 'console'], response: 'console'},
  {keys: ['stackoverflow', 'stack overflow'], response: 'stackoverflow'},
  {keys: ['javascript', 'js '], response: 'javascript'},
  {keys: ['css', 'tailwind'], response: 'css'},
  {keys: ['deploy', 'ci/cd', 'ci cd'], response: 'deploy'},
  {keys: ['production', 'prod '], response: 'production'},
  {keys: ['git ', 'github', 'commit'], response: 'git'},
  {keys: ['404'], response: '404'},
  {keys: ['bug', 'bugs'], response: 'bug'},
  {keys: ['python', 'django'], response: 'python'},
  {keys: ['vim', 'neovim'], response: 'vim'},
  {keys: ['docker', 'container', 'kubernetes', 'k8s'], response: 'docker'},
  {keys: ['linux', 'ubuntu', 'arch'], response: 'linux'},
  {keys: ['artificial intelligence', 'machine learning', ' ai ', 'chatgpt', 'openai', 'claude', 'llm', 'gpt'], response: 'ai'},
  {keys: ['api ', 'apis', 'graphql', 'grpc', 'rest '], response: 'api'},
  {keys: ['real ai', 'are you real', 'voce e real', 'vc e real', 'e real', 'is real', 'not real', 'nao e real', 'actually ai', 'real artificial'], response: 'real_ai'},
  {keys: ['flutter', 'dart'], response: 'flutter'},
  {keys: ['laravel', 'php'], response: 'laravel'},
  {keys: ['experience', 'experiencia', 'experi\u00eancia', 'years', 'anos'], response: 'experience'},
  {keys: ['dubai', 'uae', 'emirates'], response: 'dubai'},
  {keys: ['stack', 'tech', 'tecnologia', 'technologies'], response: 'stack'},
  {keys: ['quem', 'who is', 'who are', 'marcelo', 'mussi', 'about'], response: 'who'},
  {keys: ['hire', 'contratar', 'job', 'trabalho', 'vaga', 'emprego'], response: 'hire'},
  {keys: ['price', 'preco', 'pre\u00e7o', 'cost', 'custo', 'salary', 'salario', 'sal\u00e1rio', 'quanto custa', 'how much'], response: 'price'},
  {keys: ['freelance', 'freelancer', 'projeto', 'project'], response: 'freelance'},
  {keys: ['email', 'contact', 'contato', 'linkedin', 'reach'], response: 'email'},
  {keys: ['available', 'disponivel', 'dispon\u00edvel'], response: 'available'},
  {keys: ['hello', 'hi ', 'hey', 'oi', 'ola', 'ol\u00e1', 'eae', 'fala', 'bom dia', 'boa tarde', 'boa noite', 'good morning', 'good afternoon'], response: 'greetings'},
  {keys: ['thanks', 'thank', 'obrigado', 'obrigada', 'valeu', 'vlw', 'brigadao'], response: 'thanks'},
  {keys: ['bye', 'tchau', 'adeus', 'falou', 'goodbye', 'see you', 'ate mais', 'flw'], response: 'bye'},
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function MussiGPT() {
  const t = useTranslations('portfolio.chatbot');

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [dotVisible, setDotVisible] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, []);

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, scrollToBottom]);

  const getResponses = useCallback(
    (key: string): string[] | undefined => {
      try {
        return t.raw(`responses.${key}`) as string[];
      } catch {
        return undefined;
      }
    },
    [t],
  );

  const getFallback = useCallback((): string[] => {
    try {
      return t.raw('fallback') as string[];
    } catch {
      return ['Try asking about Flutter, Laravel, or how to hire Marcelo.'];
    }
  }, [t]);

  const getResponse = useCallback(
    (userInput: string): string => {
      const lower = ` ${userInput.toLowerCase().trim()} `;

      if (lower.trim() === '') {
        return t('empty');
      }

      if (messageCount > 10) {
        return t('too_many');
      }

      for (const rule of RULES) {
        for (const key of rule.keys) {
          if (lower.includes(key)) {
            const responses = getResponses(rule.response);
            if (responses && responses.length > 0) {
              return randomFrom(responses);
            }
          }
        }
      }

      return randomFrom(getFallback());
    },
    [messageCount, t, getResponses, getFallback],
  );

  const addBotMessage = useCallback(
    (text: string) => {
      setIsTyping(true);

      const delay = 800 + Math.random() * 700;

      setTimeout(() => {
        setMessages((prev) => [...prev, {text, isUser: false}]);
        setIsTyping(false);
        inputRef.current?.focus();
      }, delay);
    },
    [],
  );

  const handleSend = useCallback(() => {
    if (isTyping) return;

    const text = inputRef.current?.value.trim() ?? '';
    if (inputRef.current) inputRef.current.value = '';

    if (text === '') {
      addBotMessage(t('empty'));
      return;
    }

    setMessages((prev) => [...prev, {text, isUser: true}]);
    setMessageCount((prev) => prev + 1);

    const response = getResponse(text);
    addBotMessage(response);
  }, [isTyping, addBotMessage, getResponse, t]);

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setDotVisible(false);
        setMessages((msgs) => {
          if (msgs.length === 0) {
            return [{text: t('welcome'), isUser: false}];
          }
          return msgs;
        });
        setTimeout(() => inputRef.current?.focus(), 300);
      }
      return next;
    });
  }, [t]);

  // Escape key closes panel
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        togglePanel();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, togglePanel]);

  return (
    <div id="mussi-gpt" className="chatbot-widget">
      {/* Floating Bubble Button */}
      <button
        onClick={togglePanel}
        className="chatbot-bubble"
        aria-label="Open MussiGPT chat"
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {dotVisible && <span className="chatbot-notification-dot" />}
      </button>

      {/* Chat Panel */}
      <div className={`chatbot-panel ${isOpen ? 'open' : ''}`}>
        {/* Header (terminal style) */}
        <div className="chatbot-header">
          <div className="chatbot-header-dots">
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />
          </div>
          <div className="chatbot-header-title">
            <span className="chatbot-title-text">{t('title')}</span>
            <span className="chatbot-subtitle-text">{t('subtitle')}</span>
          </div>
          <button
            onClick={() => {
              if (isOpen) togglePanel();
            }}
            className="chatbot-header-close"
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-msg ${msg.isUser ? 'chatbot-msg-user' : 'chatbot-msg-bot'}`}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chatbot-typing">
              <span className="chatbot-typing-dot" />
              <span className="chatbot-typing-dot" />
              <span className="chatbot-typing-dot" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chatbot-input-area">
          <div className="chatbot-input-row">
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder={t('placeholder')}
              autoComplete="off"
              maxLength={200}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="chatbot-send"
              disabled={isTyping}
              aria-label={t('send')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
          <div className="chatbot-input-hint">
            <span className="chatbot-powered">if/else powered</span>
            <span className="chatbot-powered">&middot;</span>
            <span className="chatbot-powered">zero API calls</span>
          </div>
        </div>
      </div>
    </div>
  );
}
