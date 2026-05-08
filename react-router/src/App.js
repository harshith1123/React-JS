import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;
