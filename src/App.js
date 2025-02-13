import './App.css';

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import RestMenu from './components/RestMenu.js';
import Error from './components/Error.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App-container">
      <Router>
        
        <Header />

        <Routes>
          <Route path="/" element={<Body />} errorElement={<Error />} />
          <Route path="/about" element={<About />} errorElement={<Error />} />
          <Route
            path="/contact"
            element={<Contact />}
            errorElement={<Error />}
          />
          <Route path="/restaurent-menu/:restId" element={<RestMenu />} errorElement={<Error />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
