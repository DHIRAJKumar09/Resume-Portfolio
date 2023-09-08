
import './App.css';
import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfilo from './Component/Portfilo/Portfilo';
import Resume from './Component/Resume/Resume'
import Services from './Component/Service/Services';
import Pricing from "./Component/Pricing/Pricing";





const App = ()=>{
  return (
    <div className="App">
        <Sidebar></Sidebar>
         <Home></Home>
         <About></About>
         <Portfilo></Portfilo>
         <Resume></Resume>
         <Services></Services>
         <Pricing></Pricing>
        
        
      
    </div>
  );
}
  
export default App;
