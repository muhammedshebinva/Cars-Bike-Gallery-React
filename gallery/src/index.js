import React from 'react';
import { render } from "react-dom";
import App from './App';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Cars from './Components/Cars/Cars';
import Header from './Components/Header/Header';


render(
<Router>
<Header/>
  <Routes>
    
    <Route path='/' element={<App />} />
    <Route path='/cars' element={<Cars/>} />
  
    
  </Routes>
</Router>,
    
  
  document.getElementById('root'));

