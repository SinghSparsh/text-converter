
import './App.css';
import Alert from './components/Alert';

import Nav from './components/Nav';

import About from './components/About';
import React,{useState} from 'react'

import { Routes, Route } from "react-router-dom";
import Textform from './components/Textform';



function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)
  
  const showalert=(message,type)=>{
   setAlert({
    message:message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null)
   },1500);
  }
  const a=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#1f4f95';
      document.body.style.Color='white';
      showalert("Dark mode is enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.Color='black';
      showalert("Light mode is enabled","success")
    }
  }
  return (
   <>
   <Nav mode= {mode} a={a}/>
   <Alert alert={alert}></Alert>
    
    <Routes>
       
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Textform title={'TEXT CONVERTER'} showalert={showalert} />} />
    </Routes>
   
   
   
   </>
  );
}

export default App;
