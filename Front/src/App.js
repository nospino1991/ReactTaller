import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pixeladmin.min.css';
import './themes/clean.min.css';
import './App.css';
import Nav from './Components/NavBar/';
import Sidebar from './Components/Sidebar'
import Container from './Components/Container'

import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from "jquery";



import 'bootstrap/dist/js/bootstrap.bundle.min';



function App(data){  //Propiedades que recibe

  return (
           <div className="px-navbar-fixed">
              <Sidebar/>
               <Nav /> 
   
           <div class="px-content">
                  {data.Component}
             </div>


           <footer class="px-footer px-footer-bottom">
              Copyright EBIM-TECH.
              </footer>
          </div>
  );
}

export default App;


