import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
