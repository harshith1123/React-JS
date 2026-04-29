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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <>
  //   <Header/>
  //   <Footer/>
  //   <SideBar/>
  // </>
  <React.StrictMode>
    <App />
    <Props_Class desc = "Knowing about Props in the Class Component" age ="sd"/>
    <Props_Class2>
      <ol>
        <li>Apple</li>
        <li>Orange</li>
      </ol>
    </Props_Class2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
