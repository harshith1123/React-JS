import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Props_Class from './Props_Class';
import {Props_Class2} from './Props_Class';
import reportWebVitals from './reportWebVitals';
import Constructor from './Construtor';
import State from './State';
import Destructuring from './Destructuring';
import Events from './Events';
import BindEvent from './BindEvent';
import Mounting1 from './Mounting1';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruits = ["Orange", "Mango", "Strawberry"]
root.render(
  // <>
  //   <Header/>
  //   <Footer/>
  //   <SideBar/>
  // </>
  <React.StrictMode>
    {/* <App />
    <Props_Class desc = "Knowing about Props in the Class Component" age ="sd"/>
    <Props_Class2>
      <ol>
        <li>Apple</li>
        <li>Orange</li>
      </ol>
    </Props_Class2> */}
    {/* <Constructor name = "Harshit"/> */}
    {/* <State name = "Harshit"/> */}
    {/* <Destructuring name="Harshit Shetty" age = {22} arr ={fruits}/> */}
    {/* <Events name = "Harshit Gajanan Shetty"/> */}
    {/* <BindEvent/> */}
    <Mounting1 city = "Bengaluru"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
