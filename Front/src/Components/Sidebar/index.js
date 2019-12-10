
import React from 'react';

function Sidebar(props){  //Propiedades que recibe

    const styl1={
        "float": "left","width": "62%"
      } 
    
      const styl2={
        "font-size":"14px"
      } 
    
      const style3={
              "width": "54px", "height:" :"54px"
      }
  return (
         <nav className="px-nav px-nav-left px-nav-fixed">
             <button type="button" className="px-nav-toggle" data-toggle="px-nav">
                 <span className="px-nav-toggle-arrow"></span>
                 <span className="navbar-toggle-icon"></span>
                 <span className="px-nav-toggle-label font-size-11">ESCONDER MENÚ</span>
            </button>

            <ul className="px-nav-content">
               <li className="px-nav-box p-a-3 b-b-1" id="demo-px-nav-box">
                  <img src="javascript:void(0);" alt="" className="pull-xs-left m-r-2 border-round imgUsuario" style={style3} />
                  <div className="font-size-16" style={styl1}>
                      <span className="font-weight-light">Bienvenido(a),</span>
                     <strong id="nomUsuario" style={styl2}></strong>
                </div>
            </li>
          <li className="px-nav-item">
              <a href="/PrimerComponent"><i></i><span
               className="px-nav-label"><i class="fa fa-address-card-o" aria-hidden="true"></i> Crear estudiante</span></a>
        </li>

       <li className="px-nav-item">
          <a href="/segundo"><i class="fa fa-eye" aria-hidden="true"></i><span
              className="px-nav-label"></span> Ver estudiantes</a>
      </li> 

      <li className="px-nav-item">
          <a href="/Estado"><i class="fa fa-eye" aria-hidden="true"></i><span
              className="px-nav-label"></span>Estado</a>
      </li> 
      
   </ul>
</nav>

  )}
  export default Sidebar;