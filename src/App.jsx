// import reactLogo from './assets/angelieyuLogo.png'
import './App.css';

//
import HomePage from './pages/home/index.jsx'; // Assume you have a HomePage component
import ScrollSpyPage from './pages/scrollspy/index.jsx';
import ChatbotPage from './pages/chatbot/index.jsx';
import { useState } from 'react';

function App() {
  const [currentComponent, setCurrentComponent] = useState('home');
  return (
    <div className="App">
      <nav>
        <button
          onClick={() => {
            setCurrentComponent('home');
          }}
        >
          Home
        </button>
        |{' '}
        <button
          onClick={() => {
            setCurrentComponent('scrollspy');
          }}
        >
          Scrollspy
        </button>
        |
        <button
          onClick={() => {
            setCurrentComponent('chatbot');
          }}
        >
          Chatbot
        </button>
      </nav>
      {currentComponent === 'home' && <HomePage />}
      {currentComponent === 'scrollspy' && <ScrollSpyPage />}
      {currentComponent === 'chatbot' && <ChatbotPage />}
    </div>
  );
}

export default App;
