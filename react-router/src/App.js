import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Linking from './Components/Linking';
import NavLinking from './Components/NavLinking';

function App() {
  const navigate = useNavigate();
  // const navigateToAbout = ()=>{
  //   navigate('/about');
  // }

  // Event Handling navigation in single function
  // const navigateTo = (url) =>{
  //   navigate(url);
  // }

  // Through Condition
  const navigateTo = () =>{
    const a = true;
    if(a){
      navigate('/about')
    }
    else{
      navigate('/contact')
    }
  }
  return (
    <div className="App">
    {/* <Linking/> */}
    <NavLinking/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
      </Routes>
      {/* <button type="submit" onClick={()=>navigate('/about') }>About</button> */}
      {/* <button type="submit" onClick={()=>navigate('/contact') }>Contact</button> */}

      {/* Using Event Handler Function */}
      {/* <button type="submit" onClick={()=> navigateToAbout() }>About</button> */}
{/* 
      <button type="submit" onClick={()=> navigateTo('/about') }>About</button>
      <button type="submit" onClick={()=> navigateTo('/contact') }>Contact</button> */}

      
      <button type="submit" onClick={()=> navigateTo('/about') }>About</button>
      <button type="submit" onClick={()=> navigateTo('/contact') }>Contact</button>

      {/* To Go Back */}
      <button type="submit" onClick={()=> navigate(-1) }>Go Back</button>
    </div>
  );
}
export default App;
