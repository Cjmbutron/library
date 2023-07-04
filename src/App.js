
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Add from './pages/Add'
import Home from './pages/home';
import Header from './components/Header';


function App() {
  return (
    
    <Router>
    <Header/>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/add' element={<Add/>} />


    </Routes>
  </Router>
  );
}

export default App;
