import logo from './logo.svg';
import './App.css';
import Navbar from './Utils/Navbar';
import Footer from './Utils/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Watch from './Components/Pages/Watch';
function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path='/watch-video/:id/:videoName' element={<Watch/>}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
