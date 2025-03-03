import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Navbar from './components/Navigation';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
