import React from 'react';
import { render } from "react-dom";
import App from './App';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Cars from './Components/Cars/Cars';
import Header from './Components/Header/Header';
import Bikes from './Components/Bikes/Bikes';
import Add from './Components/AddCollecton/Add';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';


render(
<Router>
<Header/>
  <Routes>
    
    <Route path='/' element={<App />} />
    <Route path='/cars' element={<Cars/>} />
    <Route path='/bikes' element={<Bikes />} />
    <Route path='/add' element={<Add/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
    
  </Routes>
</Router>,
    
  
  document.getElementById('root'));

