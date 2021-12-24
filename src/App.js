import logo from './logo.svg';


import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react' //imrs shortcut
// import React, {Fragment} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



let name = "Jay";
function App() {
let [mode, setMode] = useState('light'); //state to set view mode
let [textareamode, setTextareamode] = useState('light'); //state to set view mode
const [alert, setAlert] = useState(null);

//alert ka message and type show hoga alert me is func se
const showAlert = (message,type)=>{
setAlert({
  msg: message,
  type : type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}

let toggleMode = ()=>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled!","primary")
    document.title = "Text Utils-Light Mode";
  }else{
    setMode('dark');
    document.body.style.backgroundColor='#200720';
    showAlert("Dark mode has been enabled!","success");
    document.title = "Text Utils-Dark Mode";
  }
}
let toggleMode1 = ()=>{
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    
    showAlert("Light mode has been enabled!","primary")
  }else{
    // toggleMode();
    setMode('light');
    document.body.style.backgroundColor='#696969';
  
    showAlert("Dim mode has been enabled!","success")
  }
}


  return (
    // <Router>
    // <>
    //   <Navbar title="Radhey"  mode={mode} toggleMode = {toggleMode}  toggleMode1 = {toggleMode1} link="About us" />
    //   <Alert alert={alert}/>
    //   <div className="container my-3">
    //   <Routes>
    //       <Route path="/about" element={<About/>}></Route>
    //       <Route path="/" element={<Textform showAlert = {showAlert}  heading="Enter the text here" mode = {mode}/>} ></Route>
    //     </Routes>
    //   </div>
    // </>
    // </Router>


    
  <>
    <Navbar title="Radhey"  mode={mode} toggleMode = {toggleMode}  toggleMode1 = {toggleMode1} link="About us" />
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <About/> */}
        <Textform showAlert = {showAlert}  heading="Enter the text here" mode = {mode}/> 
    </div>
  </>
  );
}

export default App;
