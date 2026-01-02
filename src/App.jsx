// import reactLogo from './assets/angelieyuLogo.png'
import './App.css';

//
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/index.jsx'; // Assume you have a HomePage component
import ScrollSpy from './pages/scrollspy/index.jsx'; // Import your new page
import Test from './pages/chatbot/index.jsx';
import ChatbotPage from './pages/chatbot/index.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        {/* Navigation links can go here or in a separate Navbar component */}
        <Routes>
          {/* Define a route for the home page */}
          <Route path="/angelieyu" element={<HomePage />} />
          {/* Define a route for your new about page */}
          <Route path="/scrollspy" element={<ScrollSpy />} />
          {/* Define a route for your new about page */}
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
